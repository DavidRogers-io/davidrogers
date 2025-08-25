// components/OptimizedImage.js - OPTIMIZED VERSION
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function OptimizedImage({ 
  src, 
  alt, 
  width = 1200, 
  height = 600, 
  priority = false, 
  className = "optimized-image" 
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  if (imageError) {
    return (
      <div 
        className={className} 
        style={{ 
          background: '#f5f5f5', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: `${Math.min(height * 0.5, 300)}px`,
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
          <p style={{ fontSize: '14px', margin: 0 }}>Image not available</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={className} style={{ position: 'relative' }}>
      {imageLoading && (
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#f8f9fa', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '8px',
            zIndex: 1,
            minHeight: '300px'
          }}
          aria-label="Loading image"
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            color: '#666',
            fontSize: '14px'
          }}>
            <div 
              style={{
                width: '20px',
                height: '20px',
                border: '2px solid #e0e0e0',
                borderTop: '2px solid #666',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
              aria-hidden="true"
            />
            Loading image...
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onError={() => {
          // Only log in development
          if (process.env.NODE_ENV === 'development') {
            console.warn('Image failed to load:', src);
          }
          setImageError(true);
          setImageLoading(false);
        }}
        onLoad={() => {
          setImageLoading(false);
        }}
        onLoadingComplete={() => {
          setImageLoading(false);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
        style={{ 
          width: '100%', 
          height: 'auto', 
          marginBottom: '4rem',
          borderRadius: '4px',
          opacity: imageLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      
      {/* CSS-in-JS for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}