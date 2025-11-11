type ButtonProps = {
  className: string
  value: string
  onClick?: () => void
}

export default function Button( {className, value, onClick} : ButtonProps) {
  return (
    
      <button className={className} onClick={onClick}>{value}</button>

  )
}
