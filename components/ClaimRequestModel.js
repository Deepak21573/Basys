import React, { useState } from 'react'
import { MdPendingActions, MdFreeCancellation } from 'react-icons/md'
import { GrCompliance } from 'react-icons/gr'
import ClaimDetailsModel from './ClaimDetailsModel'

function ClaimRequestModel(props) {
  const [openModel, setOpenModel] = useState(false)
  return (
    <div className='bg-white rounded-lg p-4 grid grid-cols-6 mt-3 text-sky-900'>
      {openModel ? <ClaimDetailsModel /> : ""}
      {props.status == "approved" ?
        <div className='flex flex-col justify-center items-center'>
          <div className='text-lg font-semibold'>Responded</div>
          <div><GrCompliance size={30} /></div>
        </div>
        : ""}
      {props.status == "pending" ?
        <div className='flex flex-col justify-center items-center'>
          <div className='text-lg font-semibold'>Pending</div>
          <div><MdPendingActions size={30} /></div>
        </div> : ""}
      {props.status == "rejected" ?
        <div className='flex flex-col justify-center items-center'>
          <div className='text-lg font-semibold'>Rejected</div>
          <div><MdFreeCancellation size={30} /></div>
        </div> : ""}
      <div className='flex flex-col col-span-2 ml-2'>
        <div> <span className='font-semibold'>Claim ID :</span> 372834 </div>
        <div> <span className='font-semibold'>Date :</span> 05/09/2010</div>
      </div>
      <div className='flex flex-col col-span-2 ml-2 justify-center'>
        <div> <span className='font-semibold'>Requested By</span> </div>
        <div> Linda Harris </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <button className='font-semibold bg-sky-900 text-white w-32 h-10 hover:text-sky-900 hover:bg-slate-100 rounded-lg' onClick={() => setOpenModel(true)}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default ClaimRequestModel