export default function Button({ children, variant = "primary", ...props }) {
  const baseClasses =
    "btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 cursor-pointer"
  const variants = {
    primary: "btn-primary",
    ghost: "btn-ghost",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}
