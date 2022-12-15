import React from 'react'

import MainBranch from './MainBranch'

import branches from './branches.json'

const ControlTree = () => {

  
  return (
    <div className='w-[240px] border-l border-l-green-light  mt-[70px] pb-[200px]  overflow-scroll h-full bg-grey fixed px-5'>
        <p className='ml-4'>All Gaps</p>
        {
            branches.map((branch,i)=>{
                return <MainBranch key={i} branch={branch}/>
            })
        }
    </div>
  )
}

export default ControlTree