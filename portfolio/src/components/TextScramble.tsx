import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const TextScramble: React.FC<TextScrambleProps> = ({
  texts,
  className = '',
  interval = 3000,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const frameRef = useRef(0);
  const resolveRef = useRef<(() => void) | null>(null);

  const scramble = (newText: string): Promise<void> => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setIsScrambling(true);
      
      const oldText = currentText;
      const length = Math.max(oldText.length, newText.length);
      const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
      
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end });
      }
      
      let frame = 0;
      
      const update = () => {
        let output = '';
        let complete = 0;
        
        for (let i = 0; i < queue.length; i++) {
          const { from, to, start, end } = queue[i];
          let { char } = queue[i];
          
          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = chars[Math.floor(Math.random() * chars.length)];
              queue[i].char = char;
            }
            output += `<span class="scramble-char">${char}</span>`;
          } else {
            output += from;
          }
        }
        
        setCurrentText(output);
        
        if (complete === queue.length) {
          setIsScrambling(false);
          resolve();
        } else {
          frameRef.current = requestAnimationFrame(update);
          frame++;
        }
      };
      
      update();
    });
  };

  useEffect(() => {
    const timer = setInterval(async () => {
      const nextIndex = (currentIndex + 1) % texts.length;
      await scramble(texts[nextIndex]);
      setCurrentIndex(nextIndex);
    }, interval);

    // Initial text
    setCurrentText(texts[0]);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(frameRef.current);
    };
  }, [currentIndex, texts, interval]);

  return (
    <span 
      className={`text-scramble ${className} ${isScrambling ? 'scrambling' : ''}`}
      dangerouslySetInnerHTML={{ __html: currentText }}
    />
  );
};

export default TextScramble;

