type FormFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'textarea';
  defaultValue?: string | null;
};

const FormField = ({ id, label, type = 'text', defaultValue }: FormFieldProps) => {
  const commonClasses = 'mt-1 block w-full rounded-md border border-dashed border-slate-600  p-2 text-slate-500 focus:border-none focus:ring-0 ';
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-medium text-primary">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea name={id} id={id} rows={3} defaultValue={defaultValue ?? ''} className={commonClasses} />
      ) : (
        <input type={type} name={id} id={id} defaultValue={defaultValue ?? ''} className={commonClasses} />
      )}
    </div>
  );
};

export default FormField;
