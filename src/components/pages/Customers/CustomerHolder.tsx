import CustomerCard from './CustomerCard'

const CustomerHolder = () => {

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


  return (
    <div className='flex flex-wrap justify-center'>
      {
        customers.map((customer) => {
          return <CustomerCard key={customer.id} customer={customer}/>
        })
      }
    </div>
  )
}

export default CustomerHolder