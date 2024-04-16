import React from 'react'

export const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-12 py-5 border-t-[1.2px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>

      <img src={val.url} alt="" />
      <span className=' font-semibold'>{val.number}</span>

    </div>
  )
}
