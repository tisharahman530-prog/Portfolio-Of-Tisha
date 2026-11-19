import { useState } from 'react';
import { Code2 } from 'lucide-react';

interface ResilientImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1C162E] via-[#161224] to-[#100D1B] p-6 text-center border border-white/[0.06] ${className}`}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#F48FB1]">
          <Code2 className="h-5 w-5" aria-hidden="true" />
        </div>
        {fallbackTitle && (
          <p className="font-display text-sm font-semibold text-[#F6F3FA] tracking-tight">
            {fallbackTitle}
          </p>
        )}
        {fallbackSubtitle && (
          <p className="mt-1 text-xs text-[#9E95B3]">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
