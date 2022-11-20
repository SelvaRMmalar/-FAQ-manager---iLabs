import React, { useMemo } from 'react';

function Input({
  name,
  label,
  type,
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

      <input
        id={name}
        name={name}
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={values[name]}
        className={`flex items-center w-full px-2 h-9 py-3  focus:ring-gray-500 focus:border-gray-500   shadow-md  border-gray-300 rounded-md ${
          isInvalid ? 'border-red-500' : null
        } `}
      />
      {isInvalid && <p className='text-red-500 text-xs'>{errors[name]}</p>}
    </>
  );
}

export default Input;
