import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='bg-grey min-h-screen'>
      <div className='max-w-[1920px] m-auto'>
        <Header />
        <Sidebar />

        <div className='bg-white min-h-screen rounded-2xl border-2 border-black flex flex-wrap 
        sm:ml-[85px]'>
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