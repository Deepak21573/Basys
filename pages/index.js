import React, { useState } from 'react'
import { MdAssignmentInd, MdOutlineStorage } from 'react-icons/md'
import { BiPlusMedical } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import PriorAuthorization from '@/components/PriorAuthorization'
import Claims from '@/components/Claims'

function Home() {
  const [currentPage, setCurrentPage] = useState("PriorAuthorization");

  return (
    <div className='h-screen w-screen bg-violet-200 grid grid-cols-5'>
      <div className='bg-white my-3 ml-3 rounded-lg'>
        <div className='text-2xl flex justify-center items-center py-8'>basys.ai</div>
        <div className='flex items-center m-3 p-3 rounded-lg hover:cursor-pointer hover:bg-violet-100' onClick={() => setCurrentPage("PriorAuthorization")}>
          <div className='ml-4'><MdAssignmentInd size={20} /></div>
          <div className='pl-4 text-lg font-light'>Prior Authorization</div>
        </div>
        <div className='flex items-center m-3 p-3 rounded-lg hover:cursor-pointer hover:bg-violet-100' onClick={() => setCurrentPage("Claims")}>
          <div className='ml-4'><MdOutlineStorage size={20} /></div>
          <div className='pl-4 text-lg font-light'>Claims</div>
        </div>
        <div className='flex items-center m-4 p-3 rounded-lg hover:cursor-pointer hover:bg-violet-100'>
          <div className='ml-4'><BiPlusMedical size={20} /></div>
          <div className='pl-4 text-lg font-light'>Medical Records</div>
        </div>
        <div className='flex items-center m-4 p-3 rounded-lg hover:cursor-pointer hover:bg-violet-100'>
          <div className='ml-4'><CgProfile size={20} /></div>
          <div className='pl-4 text-lg font-light'>Profile</div>
        </div>
      </div>
      <div className='col-span-4'>
        {currentPage == "PriorAuthorization" ?
          <PriorAuthorization />
          :
          <Claims />
        }
      </div>
    </div>
  )
}

export default Home