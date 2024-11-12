import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface PreviewProps {
  markdown: string;
}

const Preview = ({ markdown }: PreviewProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The Markdown has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">Preview</span>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="flex-1 p-4 border rounded-md bg-secondary/50 preview-content">
        {markdown || 'Your Markdown will appear here...'}
      </div>
    </div>
  );
};

export default Preview;