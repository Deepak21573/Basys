import React from 'react'
import { MdPendingActions } from 'react-icons/md'
import { GrCompliance } from 'react-icons/gr'

function RequestModel(props) {
  return (
    <div className='bg-white rounded-lg p-4 grid grid-cols-8 mt-3 text-sky-900'>
      {props.acceptStatus ?
        <div className='flex flex-col justify-center items-center'>
          <div className='text-lg font-semibold'>Accepted</div>
          <div><GrCompliance size={30} /></div>
        </div>
        :
        <div className='flex flex-col justify-center items-center'>
          <div className='text-lg font-semibold'>Pending</div>
          <div><MdPendingActions size={30} /></div>
        </div>
      }
      <div className='flex flex-col col-span-2 ml-2'>
        <div> <span className='font-semibold'>Request ID :</span> 19287 </div>
        <div> <span className='font-semibold'>Date :</span> 11/02/2003</div>
        <div>Medium Urgency </div>
      </div>
      <div className='flex flex-col col-span-2'>
        <div> <span className='font-semibold'>Services</span> </div>
        <div> - CPT 92227 x 2 visits annually </div>
        <div> - CPT 93279 x 2 visits annually </div>
      </div>
      <div className='flex flex-col col-span-2 ml-2 justify-center'>
        <div> <span className='font-semibold'>Requested By</span> </div>
        <div> Dr Roger Leon, MD </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {!props.acceptStatus ?
          <button className='font-semibold bg-sky-900 text-white w-28 h-10 hover:text-sky-900 hover:bg-slate-100 rounded-lg'>
            Approve
          </button>
          : ""}
        <div className='underline pt-2'> View Details </div>
      </div>
    </div>
  )
}

export default RequestModel