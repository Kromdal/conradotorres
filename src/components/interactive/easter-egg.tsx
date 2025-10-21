"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export const EasterEgg = () => {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [score, setScore] = useState(0);

  // Simple snake-like game state
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameRunning, setGameRunning] = useState(false);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20),
    };
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (isActive && gameRunning) {
      switch (event.code) {
        case 'ArrowUp':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
      }
      return;
    }

    setKeySequence(prev => {
      const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length);
      
      if (newSequence.length === KONAMI_CODE.length && 
          newSequence.every((key, index) => key === KONAMI_CODE[index])) {
        setIsActive(true);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
        return [];
      }
      
      return newSequence;
    });
  }, [isActive, gameRunning]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Game loop
  useEffect(() => {
    if (!gameRunning) return;

    const gameInterval = setInterval(() => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;
        
        // Wall collision
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
          setGameRunning(false);
          return currentSnake;
        }
        
        // Self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameRunning(false);
          return currentSnake;
        }
        
        newSnake.unshift(head);
        
        // Food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }
        
        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameInterval);
  }, [direction, food, gameRunning, generateFood]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setGameRunning(true);
  };

  const closeEasterEgg = () => {
    setIsActive(false);
    setGameRunning(false);
  };

  return (
    <>
      {/* Konami code activation message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            🎮 Easter Egg Activated! Click to play Snake!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur z-40 flex items-center justify-center"
            onClick={closeEasterEgg}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/50 rounded-xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">🐍 Snake Game</h2>
                <p className="text-purple-300 text-sm">Score: {score}</p>
              </div>

              {!gameRunning ? (
                <div className="text-center">
                  <button
                    onClick={startGame}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    {score > 0 ? 'Play Again' : 'Start Game'}
                  </button>
                  <p className="text-gray-400 text-xs mt-2">Use arrow keys to move</p>
                </div>
              ) : (
                <div className="grid grid-cols-20 gap-0 w-80 h-80 bg-gray-800 border border-gray-600">
                  {Array.from({ length: 400 }, (_, index) => {
                    const x = index % 20;
                    const y = Math.floor(index / 20);
                    const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                    const isFood = food.x === x && food.y === y;
                    const isHead = snake[0]?.x === x && snake[0]?.y === y;

                    return (
                      <div
                        key={index}
                        className={`w-4 h-4 ${
                          isSnake
                            ? isHead
                              ? 'bg-green-400'
                              : 'bg-green-600'
                            : isFood
                            ? 'bg-red-500'
                            : 'bg-gray-800'
                        }`}
                      />
                    );
                  })}
                </div>
              )}

              <div className="flex justify-center mt-4">
                <button
                  onClick={closeEasterEgg}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Close (Click outside)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};