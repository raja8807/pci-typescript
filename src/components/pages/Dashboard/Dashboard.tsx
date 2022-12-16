import React, { useState, useContext, useEffect } from 'react'
import Tabs from '../Tabs/Tabs'

import AppContext from '../../context/AppContext'


type Tab = {
    id: string
    tab: string
}

const Dashboard = () => {

    const setCurrentPage = useContext(AppContext).setCurrentPage

    useEffect(() => {
        setCurrentPage('dashboard')
    }, [])

    const tabs: Tab[] = [{ id: '1', tab: 'Dashboard' }]

    const [currentTab, setCurrentTab] = useState<Tab>(tabs[0])

    return (
        <div className='p-4'>
            <Tabs tabs={tabs} currentTab={currentTab} />
        </div>
    )
}

export default Dashboard