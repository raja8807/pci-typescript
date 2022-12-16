import React, { useEffect, useState, useContext } from 'react'

import ControlTree from './ControlTree/ControlTree'
import AssessmentContext from './AssessmentContext'

import AppContext from '../../../context/AppContext'
import TextEditor from './TextEditor/TextEditor'

const Assesments = () => {

  const [currentEnd, setCurrentEnd] = useState({})
  const [currentTab, setCurrentTab] = useState({})

  const setCurrentPage = useContext(AppContext).setCurrentPage

  function changeCurrentEnd(end) {
    setCurrentEnd(end)
  }

  useEffect(() => {
    setCurrentPage('assesments')
  }, [])

  useEffect(() => {
    if (currentEnd.tabs) {
      setCurrentTab(currentEnd.tabs[0])
    }
  }, [currentEnd])

  return (
    <>
      <AssessmentContext.Provider value={{ currentEnd, changeCurrentEnd }}>

        <ControlTree />

        <div className=' ml-[240px]'>

          <div className='w-screen  h-[70px] bg-grey px-5 flex items-center'>

          </div>

          <div className='p-5 rounded-xl bg-white'>
            <div className='flex'>
            {
              currentEnd.tabs && 
              currentEnd.tabs.map((tab,i)=>{
                return <p key={i} className={`mr-4 font-bold text-gray-500 border-b-4 ${currentTab.tab == tab.tab && 'pr-5 border-green-light text-black'} cursor-pointer`}
                onClick={()=>{
                  setCurrentTab(tab)
                }}>{tab.tab}</p>
              })
            }
            </div>

            <TextEditor currentTab={currentTab}/>

          </div>
        </div>

      </AssessmentContext.Provider>


    </>
  )
}

export default Assesments