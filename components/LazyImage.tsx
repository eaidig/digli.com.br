import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, containerClassName, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-900 ${containerClassName || ''}`}>
      {/* Skeleton / Placeholder Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse z-10 flex items-center justify-center">
            {/* Opcional: Ícone discreto ou apenas o fundo pulsante */}
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-1000 ease-in-out ${className} ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-105'
        }`}
        {...props}
      />
    </div>
  );
};