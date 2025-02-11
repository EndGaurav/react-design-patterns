import React, { ReactNode } from 'react'

type SplitScreenProps = {
  leftWeight: number,
  rightWeight: number,
  children: [ReactNode, ReactNode]
}

const SplitScreen = ({children, leftWeight, rightWeight}: SplitScreenProps) => {
  const [left, right] = children;
  console.log("---left: ", left);
  console.log("---right: ", right);
  
  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;
  return (
    <section className='flex w-screen'>
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  )
}

export default SplitScreen