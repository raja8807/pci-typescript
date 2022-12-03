import React, { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import CustomerHolder from './components/pages/Customers/CustomerHolder'
import Tabs from './components/pages/Tabs/Tabs'

const App = () => {

  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [showHeader, setShowHeader] = useState<boolean>(false)

  const [showboxes, setboxes] = useState<boolean>(true)

  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className={`${showSideBar || showHeader ? 'bg-black' : 'bg-grey'}  min-h-screen
    md:bg-grey`}>
      <div className='max-w-[1920px] m-auto'>
        <Header showHeader={showHeader} setShowHeader={setShowHeader} />
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

        <div className={`pt-[88px]  h-screen overflow-y-scroll ${showSideBar && 'overflow-x-hidden'}
        md:ml-[85px]`}>
          <div className={`bg-white min-h-full ${showSideBar && 'opacity-25 translate-x-[85px] '} ${showHeader && 'opacity-25'} overflow-hidden rounded-2xl p-4
          md:opacity-100 md:ml-0`}>
            {/* <Tabs/> */}
            <CustomerHolder />

          </div>
        </div>
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