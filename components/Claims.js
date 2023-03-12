import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsFillBellFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import ClaimRequestModel from './ClaimRequestModel'

function Claims() {
  return (
    <div className='m-6'>
      <div className='flex justify-between items-center'>
        <div className='text-3xl'>Welcome Bayer!</div>
        <div className='flex justify-center items-center'>
          <div className='px-2'><AiOutlineSearch size={25} /></div>
          <div className='px-2'><BsFillBellFill size={25} /></div>
          <div className='px-2'><CgProfile size={30} /></div>
          <div className='px-2'><FiLogOut size={25} /></div>
        </div>
      </div>
      <div className='text-2xl mt-8'>Claim Requests</div>
      <div className='text-xl mt-4'>Pending</div>
      <ClaimRequestModel status="pending" />
      <ClaimRequestModel status="pending" />
      <div className='text-xl mt-4'>Approved</div>
      <ClaimRequestModel status="approved" />
      <div className='text-xl mt-4'>Rejected</div>
      <ClaimRequestModel status="rejected" />
    </div>
  )
}

export default Claims