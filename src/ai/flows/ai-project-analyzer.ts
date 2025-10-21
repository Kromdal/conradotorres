// src/ai/flows/ai-project-analyzer.ts
'use server';

/**
 * @fileOverview An AI tool that analyzes project descriptions for potential security vulnerabilities or design flaws.
 *
 * - analyzeProject - A function that analyzes the project description and identifies potential security vulnerabilities and design flaws.
 * - AnalyzeProjectInput - The input type for the analyzeProject function.
 * - AnalyzeProjectOutput - The return type for the analyzeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeProjectInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project to analyze.'),
});
export type AnalyzeProjectInput = z.infer<typeof AnalyzeProjectInputSchema>;

const AnalyzeProjectOutputSchema = z.object({
  vulnerabilities: z
    .array(z.string())
    .describe('A list of potential security vulnerabilities identified in the project description.'),
  designFlaws: z
    .array(z.string())
    .describe('A list of potential design flaws identified in the project description.'),
});
export type AnalyzeProjectOutput = z.infer<typeof AnalyzeProjectOutputSchema>;

export async function analyzeProject(
  input: AnalyzeProjectInput
): Promise<AnalyzeProjectOutput> {
  return analyzeProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeProjectPrompt',
  input: {schema: AnalyzeProjectInputSchema},
  output: {schema: AnalyzeProjectOutputSchema},
  prompt: `You are an AI expert in identifying security vulnerabilities and design flaws in software projects. Review the following project description and identify any potential security vulnerabilities or design flaws. Provide the vulnerabilities and design flaws in the specified JSON format.\n\nProject Description: {{{projectDescription}}}`,
});

const analyzeProjectFlow = ai.defineFlow(
  {
    name: 'analyzeProjectFlow',
    inputSchema: AnalyzeProjectInputSchema,
    outputSchema: AnalyzeProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
