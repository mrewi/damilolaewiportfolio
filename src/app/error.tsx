'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center">
      <AlertTriangle className="w-16 h-16 text-destructive mb-6" />
      <h2 className="text-3xl font-bold font-headline mb-4 text-destructive">Oops, something went wrong!</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        {error.message || "We encountered an unexpected issue. Please try again or contact support if the problem persists."}
      </p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        size="lg"
      >
        Try again
      </Button>
    </div>
  );
}
