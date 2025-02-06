
import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';

export function QuestionEditor({ initialData, onSubmit }) {
  const [title, setTitle] = React.useState(initialData?.title || '');
  const [content, setContent] = React.useState(initialData?.content || '');
  const [tags, setTags] = React.useState(initialData?.tags || []);
  const [tagInput, setTagInput] = React.useState('');
  const { toast } = useToast();

  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && tagInput) {
      if (!tags.includes(tagInput)) {
        setTags([...tags, tagInput]);
      }
      setTagInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || tags.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    onSubmit({ title, content, tags });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Question title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <div data-color-mode="dark">
        <MDEditor
          value={content}
          onChange={setContent}
          preview="edit"
          height={400}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="cursor-pointer"
            onClick={() => setTags(tags.filter(t => t !== tag))}
          >
            {tag} ×
          </Badge>
        ))}
        <Input
          placeholder="Add tags (press Enter)"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyPress={handleTagAdd}
          className="w-32"
        />
      </div>

      <Button type="submit">
        {initialData ? 'Update Question' : 'Post Question'}
      </Button>
    </form>
  );
}
