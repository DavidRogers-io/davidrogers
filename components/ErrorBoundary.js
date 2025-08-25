// components/ErrorBoundary.js - IMPROVED VERSION
'use client'
import { Component } from 'react'
import './ErrorBoundary.css' // FIX: Import the new CSS file

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

    if (process.env.NODE_ENV === 'production') {
      // Sentry.withScope((scope) => {
      //   scope.setExtras(errorInfo);
      //   Sentry.captureException(error);
      // });
    }
  }
  
  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="error-fallback"
          style={{
            padding: '40px 20px',
            textAlign: 'center',
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            margin: '20px 0',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          role="alert"
          aria-live="assertive"
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
          <h2 style={{ 
            color: '#495057', 
            marginBottom: '16px',
            fontSize: '24px',
            fontWeight: '800'
          }}>
            Something went wrong
          </h2>
          <p style={{ 
            color: '#6c757d', 
            marginBottom: '24px',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={this.handleRetry}
              // FIX: Removed inline style and event handlers.
              className="error-button-primary"
            >
              Try Again
            </button>
            
            <button 
              onClick={() => window.location.reload()}
              // FIX: Removed inline style and event handlers.
              className="error-button-secondary"
            >
              Refresh Page
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details 
              style={{ 
                marginTop: '24px', 
                textAlign: 'left',
                background: '#fff3cd',
                border: '1px solid #ffeaa7',
                borderRadius: '4px',
                padding: '16px'
              }}
            >
              <summary style={{ 
                cursor: 'pointer', 
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#856404'
              }}>
                Error Details (Development Only)
              </summary>
              <pre style={{ 
                fontSize: '12px', 
                overflow: 'auto',
                color: '#721c24',
                background: '#f8d7da',
                padding: '12px',
                borderRadius: '4px',
                margin: '8px 0'
              }}>
                {this.state.error.toString()}
              </pre>
              {this.state.errorInfo.componentStack && (
                <pre style={{ 
                  fontSize: '12px', 
                  overflow: 'auto',
                  color: '#721c24',
                  background: '#f8d7da',
                  padding: '12px',
                  borderRadius: '4px'
                }}>
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}