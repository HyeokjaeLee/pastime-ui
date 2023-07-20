import { useRef } from 'react';

export const useTextareaDynamicHeight = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { current: textareaElement } = textareaRef;

  if (textareaElement)
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;

  const handleTextareaHeight = (target: EventTarget & HTMLTextAreaElement) => {
    const { style } = target;
    style.height = 'auto';
    style.height = `${target.scrollHeight}px`;
  };

  return {
    textareaRef,
    handleTextareaHeight,
  };
};
