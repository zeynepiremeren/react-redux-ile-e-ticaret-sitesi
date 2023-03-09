import React from 'react'

const PagesContainer = ({children}) => {
  return (
    <div className='h-48 w-full object-cover md:h-full md:w-48'>
      {children}
    </div>
  )
}

export default PagesContainer
