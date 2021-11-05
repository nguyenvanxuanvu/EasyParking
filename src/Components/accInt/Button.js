const Button = ({ BGColor, TColor, text, type, className, onClick }) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: BGColor, color:TColor }}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  BGColor: 'rgba(255, 213, 59, 1)',
  TColor: 'rgba(33, 25, 49, 1)',
  className: 'btn',
}

export default Button
