import React from 'react'


type ContainerProps = {
  children: React.ReactNode;
};

function Container({children}: ContainerProps) {
  return (
    <div className='mx-auto max-w-[1200px] '>{children}</div>
  )
}

export default Container