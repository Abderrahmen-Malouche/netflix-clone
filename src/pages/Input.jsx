import React from 'react'

function Input({
    placeholder,
    type="text",
    onChange,
    value,
    name,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      className="py-4 px-4 rounded-lg bg-white bg-opacity-20 border-slate-400 border-2 text-white"
    />
  )
}

export default Input