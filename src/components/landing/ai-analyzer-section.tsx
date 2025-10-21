"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { analyzeProject, AnalyzeProjectOutput } from "@/ai/flows/ai-project-analyzer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, AlertTriangle, ShieldCheck } from "lucide-react"

const formSchema = z.object({
  projectDescription: z.string().min(50, {
    message: "Project description must be at least 50 characters.",
  }),
})

export default function AiAnalyzerSection() {
  const { toast } = useToast()
  const [analysisResult, setAnalysisResult] = useState<AnalyzeProjectOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setAnalysisResult(null)
    try {
      const result = await analyzeProject(values)
      setAnalysisResult(result)
    } catch (error) {
      console.error("AI analysis failed:", error)
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your project. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="ai-analyzer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">AI Project Analyzer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This tool leverages AI to analyze project descriptions for potential security vulnerabilities and design flaws. Give it a try by pasting a project description below.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project, its features, architecture, and technology stack..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The more detail you provide, the better the analysis will be.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Analyze Project"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {analysisResult && (
            <div className="mt-8 grid gap-6 animate-in fade-in duration-500">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Potential Security Vulnerabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisResult.vulnerabilities.length > 0 ? (
                    <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                      {analysisResult.vulnerabilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">No obvious security vulnerabilities found.</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-500" />
                    Potential Design Flaws
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisResult.designFlaws.length > 0 ? (
                    <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                      {analysisResult.designFlaws.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                     <p className="text-muted-foreground">No obvious design flaws found.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
