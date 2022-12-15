import React, { useEffect, useState } from 'react'

import ControlTree from './ControlTree/ControlTree'
import AssessmentContext from './AssessmentContext'

const Assesments = () => {
  const [currentEnd,setCurrentEnd] = useState({})

  function changeCurrentEnd(end){
    setCurrentEnd(end)
  }

  // useEffect(()=>{
  //   // console.log(currentEnd);
  //   return
  // },[currentEnd])

  return (
    <>
      <AssessmentContext.Provider value={{currentEnd,changeCurrentEnd}}>
        <ControlTree />

        <div className=' ml-[220px]'>
          <div className='w-screen  h-[70px] bg-grey px-5 flex items-center'>

          </div>
          <div className='p-5 rounded-xl bg-white'>
            {
              currentEnd.tabs && 
              currentEnd.tabs.map((tab,i)=>{
                return <p key={i}>{tab.tab}</p>
              })
            }
          </div>
        </div>
      </AssessmentContext.Provider>


    </>
  )
}

export default Assesments