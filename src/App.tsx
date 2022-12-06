import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AppContext from './components/context/AppContext'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import CustomerHolder from './components/pages/Customers/CustomerHolder'
import Dashboard from './components/pages/Dashboard/Dashboard'
import AssesmentsHolder from './components/pages/Assessments/AssesmentsHolder'

const App = () => {

  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [showHeader, setShowHeader] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<string>('dashboard')

  document.body.addEventListener('keydown', (e): void => {
    if (e.key === 'Escape') {
      setShowHeader(false)
      setShowSideBar(false)
    }
  })

  return (
    <div className={`${showSideBar || showHeader ? 'bg-black' : 'bg-grey'}  min-h-screen
    md:bg-grey`}>
      <div className='max-w-[1920px] m-auto'>
        <AppContext.Provider value={{ currentPage, setCurrentPage }}>

          <Header showHeader={showHeader} setShowHeader={setShowHeader} />
          <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

          <div className={`pt-[88px]  h-screen overflow-y-scroll ${showSideBar && 'overflow-x-hidden'}
        md:ml-[85px]`}>
            <div className={`bg-white min-h-full ${showSideBar && 'opacity-25 translate-x-[85px] '} ${showHeader && 'opacity-25'} overflow-hidden 
          md:opacity-100 md:ml-0`}>

              <Routes>
                <Route index element={<Dashboard />} />
                <Route path='/assesments' element={<AssesmentsHolder/>}/>
                <Route path='/manage-customer' element={<CustomerHolder/>}/>
              </Routes>
            </div>
          </div>

        </AppContext.Provider>
      </div>

      {
        !showSideBar && !showHeader &&
        <div className='w-full bg-stone-300 fixed bottom-0'>
          <p className='text-center text-gray-500'><small>Powered By</small> <span className='font-bold'>SAGE</span></p>
        </div>
      }
    </div>
  )
}

export default App