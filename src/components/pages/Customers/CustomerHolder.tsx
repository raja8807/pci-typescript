import CustomerCard from './CustomerCard'
import React, { useState } from 'react'
import Tabs from '../Tabs/Tabs'

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

  var period: undefined | number;
  function addToFav(customerName: string) {

    if (period) { clearTimeout(period) }
    setMeassage(customerName)
    setTimeout((): void => {
      setMeassage('')
    }, 5000)
  }

  let tabs = [
    {
      id: '1',
      tab: 'Manage Customer'
    },
    {
      id: '2',
      tab: 'Customer'
    },
    {
      id: '3',
      tab: 'Add customer'
    }
  ]

  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0])

  function changeTab(tab: Tab): void {
    setCurrentTab(tab)
  }

  return (
    <div>
      <Tabs currentTab={currentTab} tabs={tabs} changeTab={changeTab} />
      <div className='flex flex-wrap justify-center gap-x-4'>
        {
          message != "" &&
          <div className='absolute bottom-10 left-10 z-40 bg-black text-white text-sm rounded-md px-4 py-2'>
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
  )
}

export default CustomerHolder