import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileX } from 'lucide-react';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center border border-border/50 shadow-soft">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <FileX className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Project Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-foreground/70">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="cta-primary">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Projects
              </Link>
            </Button>
            <Button variant="outline" asChild className="uniform-hover">
              <Link href="/">
                Go to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}