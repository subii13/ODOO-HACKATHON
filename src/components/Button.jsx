export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary | secondary | danger
  disabled = false,
  loading = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-${variant}`}
    >
      {loading ? 'Loading…' : children}
    </button>
  );
}
