import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto  py-20 flex flex-col lg:flex-row items-center gap-2'>
            <Card width={"basis-1/3"} start={false} para={true} index={0} />
            <Card width={"basis-2/3"} start={true} para={false} index={1}/>
        </div>
    </div>
  )
}

export default Cards