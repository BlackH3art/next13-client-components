'use client';

import { useState } from "react";

export const AdminButton = () => {
  console.log('-- ADMIN BUTTON - Client Component --');

  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(count + 1);
    console.log('Click')
  }
  return (
    <div>
      <button className="border border-red-400 p-3" onClick={handleClick}>
        click client component
      </button>

      <p>Licznik:</p>
      <p>{count}</p>
    </div>
  )
}