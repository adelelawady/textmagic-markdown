import { Bold, Italic, Link, List, Heading1, Heading2, Heading3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ToolbarProps {
  onFormat: (command: string, value?: string) => void;
}

const Toolbar = ({ onFormat }: ToolbarProps) => {
  return (
    <div className="flex items-center space-x-1 bg-background border rounded-md p-1">
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => onFormat('bold')}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => onFormat('italic')}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => onFormat('heading-1')}
      >
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => onFormat('heading-2')}
      >
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => onFormat('heading-3')}
      >
        <Heading3 className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => onFormat('list')}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="toolbar-button"
        onClick={() => {
          const url = prompt('Enter link URL:');
          if (url) onFormat('link', url);
        }}
      >
        <Link className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Toolbar;