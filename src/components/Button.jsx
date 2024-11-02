import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='texxt-white',
    className='',
    ...props
    }) 
{
  return (
    <button
    className={`px-4 py-2 rounded-lg m-2 ${bgColor} ${textColor} ${className}`}
    {...props}
    >{children}</button>
  )
}

export default Button