// components/ui/Button.js
export default function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseClasses = 'font-weight: 800 border-none cursor-pointer transition-all duration-200'
  const variants = {
    primary: 'color: white background-color: black',
    secondary: 'color: black background-color: white border: 1px solid black'
  }
  const sizes = {
    sm: 'padding: 8px 16px text-sm',
    md: 'padding: 16px 32px',
    lg: 'padding: 20px 40px text-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  )
}