// components/VideoEmbed.js
'use client'
import React, { useState } from 'react'

export default function VideoEmbed({ src, title, className = "video-embed" }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Extract video ID from YouTube URL for thumbnail
  const getVideoId = (url) => {
    const match = url.match(/embed\/([^?]+)/)
    return match ? match[1] : null
  }

  const videoId = getVideoId(src)
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null

  if (hasError) {
    return (
      <div 
        className={className}
        style={{
          background: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          padding: '40px 20px',
          textAlign: 'center',
          marginBottom: '4rem'
        }}
        role="img"
        aria-label={`Video: ${title} - Failed to load`}
      >
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎥</div>
        <p style={{ color: '#666', margin: 0 }}>Video could not be loaded</p>
        {src && (
          <a 
            href={src.replace('/embed/', '/watch?v=')} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#0066cc', 
              textDecoration: 'underline',
              fontSize: '14px',
              marginTop: '8px',
              display: 'inline-block'
            }}
          >
            Watch on YouTube
          </a>
        )}
      </div>
    )
  }

  return (
    <div 
      className={className}
      style={{ 
        position: 'relative', 
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        marginBottom: '4rem',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      {isLoading && (
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
            zIndex: 1
          }}
          aria-label="Loading video"
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
            Loading video...
          </div>
        </div>
      )}
      
      <iframe
        src={src}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
          console.warn('Video failed to load:', src)
        }}
      />

      {/* CSS-in-JS for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}