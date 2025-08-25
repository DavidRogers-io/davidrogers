// components/ExternalLink.js (FIXED VERSION)
export default function ExternalLink({ href, children, className = "", ...props }) {
  const isExternal = href.startsWith('http')
  
  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  )
}