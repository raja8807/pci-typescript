import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import CustomerHolder from './components/pages/Customers/CustomerHolder'

const App = () => {
  return (
    <div className='bg-grey min-h-screen'>
      <div className='max-w-[1920px] m-auto'>

        <Header />
        <Sidebar />


        <div className='bg-white min-h-screen rounded-2xl  flex flex-wrap justify-center
        md:ml-[85px]'>

          <CustomerHolder/>

          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>

          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>

          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>

          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>

          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>
          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>
          <div className='w-[400px] h-[263px] border-2 rounded-xl m-6 border-green-600'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App