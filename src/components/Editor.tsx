import { useEffect, useRef } from 'react';
import Toolbar from './Toolbar';

interface EditorProps {
  onChange: (content: string) => void;
}

const Editor = ({ onChange }: EditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleFormat = (command: string, value?: string) => {
    document.execCommand('styleWithCSS', false, 'true');
    
    switch (command) {
      case 'bold':
        document.execCommand('bold', false);
        break;
      case 'italic':
        document.execCommand('italic', false);
        break;
      case 'heading-1':
        document.execCommand('formatBlock', false, '<h1>');
        break;
      case 'heading-2':
        document.execCommand('formatBlock', false, '<h2>');
        break;
      case 'heading-3':
        document.execCommand('formatBlock', false, '<h3>');
        break;
      case 'list':
        document.execCommand('insertUnorderedList', false);
        break;
      case 'link':
        if (value) {
          document.execCommand('createLink', false, value);
        }
        break;
    }
  };

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    const handleInput = () => {
      onChange(editor.innerHTML);
    };

    editor.addEventListener('input', handleInput);
    return () => editor.removeEventListener('input', handleInput);
  }, [onChange]);

  return (
    <div className="flex-1 flex flex-col gap-2">
      <Toolbar onFormat={handleFormat} />
      <div
        ref={editorRef}
        className="flex-1 p-4 border rounded-md editor-content focus:outline-none"
        contentEditable
        suppressContentEditableWarning
      />
    </div>
  );
};

export default Editor;