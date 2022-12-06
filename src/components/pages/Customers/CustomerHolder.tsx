import CustomerCard from './CustomerCard'
import React, { useState } from 'react'
import Tabs from '../Tabs/Tabs'
import { AiFillStar } from 'react-icons/ai'


type Tab = {
  id: string
  tab: string
}

const CustomerHolder: React.FC = () => {

  let customers = [
    {
      id: '100024540001',
      name: "Zinc Works",
      projects: 12,
      person: 'S',
      location: "US",
      status: 'Single',
    },
    {
      id: '100024540002',
      name: "Virgil International",
      projects: 15,
      person: 'S',
      location: "US",
      status: 'Single',
    },
    {
      id: '100024540003',
      name: "Cascade Inc",
      projects: 4,
      person: 'S',
      location: "US",
      status: 'Single',
    },
    {
      id: '100024540004',
      name: "Fission LLC",
      projects: 10,
      person: 'S',
      location: "US",
      status: 'Single',

    },
    {
      id: '100024540005',
      name: "Green Socked",
      projects: 24,
      person: 'S',
      location: "US",
      status: 'Single',
    },
    {
      id: '100024540006',
      name: "Hotline Services LLC",
      projects: 12,
      person: 'S',
      location: "UK",
      status: 'Single',
    }
  ]

  const [message, setMeassage] = useState<string>('')
  const [favourites, setFavourites] = useState<string[]>([])

  var period: undefined | number;
  function addToFav(customerName: string) {

    if (!(favourites.includes(customerName))) {
      
      setFavourites((prev) => {
        return [...prev, customerName]
      })

      if (period) { clearTimeout(period) }
    setMeassage(customerName + " added to favourites")
    setTimeout((): void => {
      setMeassage('')
    }, 5000)

    } else {
      // alert('ok')
      setFavourites((prev) => {
        return prev.filter((cus) => {
          return cus != customerName
        })
      })

      if (period) { clearTimeout(period) }
    setMeassage(customerName + " removed from favourites")
    setTimeout((): void => {
      setMeassage('')
    }, 5000)
    }

    console.log(favourites);
    

    
  }

  let tabs = [
    {
      id: '1',
      tab: 'Manage Customer'
    }
  ]

  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0])

  return (
    <>

      <div className='w-screen h-[70px] bg-grey px-5 flex items-center'>

        <div className='cursor-pointer flex bg-white  p-[3px] flex items-center rounded-full shadow-md'>

          <AiFillStar className='bg-green-light rounded-full h-[25px] w-[25px] p-1 text-white mr-2' />
          <p className='mr-2'>Favourites</p>
          <div className='h-[15px] w-[15px] bg-green-dark text-white rounded-full flex items-center justify-center'>
            {
              favourites.length
            }
          </div>

        </div>

      </div>

      <div className='rounded-2xl p-4'>
        <Tabs currentTab={currentTab} tabs={tabs} />


        <div className='flex flex-wrap justify-center gap-x-4'>
          {
            message != "" &&
            <div className='absolute bottom-10 left-3/4 z-40 bg-black text-white text-sm rounded-md px-4 py-2'>
              {message}
            </div>
          }

          {
            customers.map((customer) => {
              return <CustomerCard key={customer.id} customer={customer} addToFav={addToFav} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default CustomerHolder