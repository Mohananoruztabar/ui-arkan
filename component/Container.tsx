import React from 'react'


type ContainerProps = {
  children: React.ReactNode;
};

function Container({children}: ContainerProps) {
  return (
    <div className='mx-auto w-full md:max-w-[1200px] '>{children}</div>
  )
}

export default Container