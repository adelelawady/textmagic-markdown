import { useState } from 'react';
import Editor from '@/components/Editor';
import Preview from '@/components/Preview';
import { convertToMarkdown } from '@/lib/converter';

const Index = () => {
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = (content: string) => {
    setMarkdown(convertToMarkdown(content));
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Rich Text to Markdown
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Convert your rich text to Markdown with this simple editor. Style your text using the toolbar and see the Markdown output in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          <Editor onChange={handleEditorChange} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default Index;