import React, { useMemo } from 'react';

function Textarea({
  name,
  label,
  rows,
  values,
  errors,
  touches,
  onChange,
  onBlur,
  onFocus,
  placeholder,
}) {
  const isInvalid = useMemo(() => {
    return touches[name] && errors[name];
  }, [touches, errors, name]);

  return (
    <>
      <label htmlFor={name} className='block  font-medium text-gray-700'>
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        rows={rows}
        className={`mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-md  border-gray-300 rounded-md p-2 resize-none ${
          isInvalid ? 'border-red-500' : null
        } `}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={values[name]}
      />
      {isInvalid && <p className='text-red-500 text-xs'>{errors[name]}</p>}
    </>
  );
}

export default Textarea;
