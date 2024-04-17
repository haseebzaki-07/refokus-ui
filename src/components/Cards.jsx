import React from 'react'
import Card from './Card'


const Cards = () => {
  return (
    <div className='w-full h-[85vh] '>
        <div className='h-full max-w-screen-xl mx-auto flex gap-[.5vw] p-20 '>
           <Card width={"basis-2/5"}  start = {false} para={true}/>
           <Card width={"basis-3/5"}  start={true} para={false} hover="true" padding={"p-10"} />
        </div>
      
    </div>
  )
}

export default Cards
