import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { MdPendingActions } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { ImCross } from 'react-icons/im'

export default function ModalPopup(props) {
  const [open, setOpen] = useState(true)
  const route = useRouter()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:p-6 text-sky-900 w-screen">
              <div className='w-3/4 rounded-lg px-4 pt-5 bg-violet-100 ml-40'>
                <div className='flex justify-end hover:text-sky-700 hover:cursor-pointer' onClick={() => setOpen(false)}><ImCross /></div>
                <div className='grid grid-cols-5 '>
                  <div className='col-span-2'>
                    <div className='flex bg-white rounded-lg m-3 p-3'>
                      <div>
                        <MdPendingActions size={60} />
                      </div>
                      <div className='pl-4'>
                        <div> <span className='font-semibold'>Claim ID : </span>38428 </div>
                        <div> <span className='font-semibold'>Date :</span> 23/04/2009 </div>
                        <div> <span className='font-semibold'>Status :</span> Pending </div>
                      </div>
                    </div>
                    <div className='bg-white rounded-lg m-3 p-3'>
                      <div className='flex'>
                        <div>
                          <CgProfile size={80} />
                        </div>
                        <div className='pl-4'>
                          <div> <span className='font-semibold text-lg'>Linda Harris</span> </div>
                          <div> 11/02/2001 (76 yrs.), F </div>
                          <div> <span className='font-semibold'>Non-smoker</span> </div>
                        </div>
                      </div>
                      <div className='flex flex-row justify-between pt-4 text-sm'>
                        <div>
                          <div>EMPI/MRN</div>
                          <div>P92120</div>
                        </div>
                        <div>
                          <div>Phone</div>
                          <div>3981279813</div>
                        </div>
                        <div>
                          <div>PCP</div>
                          <div>Dr. Karen Carter</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex bg-white rounded-lg m-3 p-3'>
                      <div className='pl-4'>
                        <div className='text-lg font-semibold'>Dr. Roger Lenon</div>
                        <div>MD, NPI 42312</div>
                        <div>Holtzman Medical Group</div>
                        <div>Contact No. 2918239172</div>
                      </div>
                      <div className='flex justify-center items-center ml-8'>
                        <img src="https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg" className='h-32 w-32' />
                      </div>
                    </div>
                    <div className='flex flex-col bg-white rounded-lg m-3 p-3'>
                      <div className='text-lg font-semibold'>Prior Authorization</div>
                      <div> <span className='font-semibold'>RID :</span> </div>
                      <div> <span className='font-semibold'>AuthID :</span> </div>
                      <div> <span className='font-semibold'>Services Requested</span> </div>
                      <div> - CPT 92227 x 2 visits annually </div>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='flex flex-col bg-white rounded-lg m-3 p-3'>
                      <div className='text-lg font-semibold'>Primary Payer</div>
                      <div>Veterans Administration - Prescott VA</div>
                      <div> <span className='font-semibold'>EDI : </span> </div>
                      <div> <span className='font-semibold'>Assignment : </span> </div>
                      <div> <span className='font-semibold'>Force Drop to Paper : </span> </div>
                    </div>
                    <div className='flex flex-col bg-white rounded-lg m-3'>
                      <div className='grid grid-cols-6 bg-blue-900 rounded-lg text-white p-3'>
                        <div>CPT</div>
                        <div className='col-span-3'>Diagnosis</div>
                        <div>Units</div>
                        <div>Price</div>
                      </div>
                      <div className='grid grid-cols-6 p-3'>
                        <div>926781</div>
                        <div className='col-span-3'>Imaging of Retina for detection or monitoring of disease</div>
                        <div>2</div>
                        <div>$413</div>
                      </div>
                      <div className='flex flex-row justify-end pr-8 pb-2 font-semibold'>
                        Total : $826
                      </div>
                    </div>
                    <div className='flex flex-col bg-white rounded-lg m-3 p-3'>
                      <div className='text-lg font-semibold'>Note for Provider</div>
                      <textarea className='p-2' />
                    </div>
                    <div className='flex flex-col bg-white rounded-lg m-3 p-3 font-semibold'>
                      <button className='bg-red-500 text-white p-2 rounded-lg hover:cursor-pointer hover:bg-red-400'>Reject With Note</button>
                      <button className='mt-2 bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-700'>Approve</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog >
    </Transition.Root >
  )
}
