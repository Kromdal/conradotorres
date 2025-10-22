"use client";

import { Badge } from "@/components/ui/badge"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SkillTooltipProps {
  name: string;
  proficiency: string;
  experience: string;
  description: string;
  level: number;
  children: React.ReactNode;
}

export const SkillTooltip = ({ 
  name, 
  proficiency, 
  experience, 
  description, 
  level, 
  children 
}: SkillTooltipProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          className="w-64 p-4 space-y-3" 
          side="right" 
          align="start"
          sideOffset={16}
          alignOffset={-8}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">{name}</h4>
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                {proficiency}
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              <strong>Experience:</strong> {experience}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};