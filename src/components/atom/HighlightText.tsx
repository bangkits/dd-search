import React from 'react';

export default function HighlightText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  return (
    <>
      {text.split(new RegExp(`(${highlight})`, 'gi')).map((part, index) => (
        <label key={index}>
          {part.toLowerCase() === highlight.toLowerCase() ? (
            <span className="bg-green-500">{part}</span>
          ) : (
            part
          )}
        </label>
      ))}
    </>
  );
}
