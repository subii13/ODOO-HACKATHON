export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder = '',
  as = 'input', // 'input' | 'textarea'
}) {
  const Field = as;
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        id={name}
        name={name}
        type={as === 'input' ? type : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
