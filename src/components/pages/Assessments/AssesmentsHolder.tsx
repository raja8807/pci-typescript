import React, { useState, useEffect } from 'react'

import {useParams} from 'react-router-dom'

import Tabs from '../Tabs/Tabs'

type Tab = {
    id: string
    tab: string
    to?: string
}

const AssesmentsHolder = () => {

    // let params = useParams()

    let tabs: Tab[] = [
        {
            id: '1',
            tab: 'Assesment Detail',
            to: 'assesment-detail'
        },
        {
            id: '2',
            tab: 'Control Assignment',
            to: 'control-assignment'
        },
        {
            id: '3',
            tab: 'Communication Log',
            to: 'communication-log'
        },
        {
            id: '4',
            tab: 'Compliance History',
            to: 'compliance-history'
        },
        {
            id: '5',
            tab: 'File Share',
            to: 'file-share'
        },

    ]

    const [currentTab, setCurrentTab] = useState<Tab>(tabs[0])

    useEffect(() => {
        return
    }, [currentTab])

    function changeTab(tab: Tab): void {
        setCurrentTab(tab)
    }

    return (
        <div className='p-4'>
            <Tabs tabs={tabs} currentTab={currentTab} changeTab={changeTab} />
            {
                currentTab.to==='assesment-detail' && <p>{currentTab.tab} Component</p>
            }
            
            {
                currentTab.to==='control-assignment' && <p>{currentTab.tab} Component</p>
            }

            {
                currentTab.to==='communication-log' && <p>{currentTab.tab} Component</p>
            }

            {
                currentTab.to==='assesment-detail' && <p>{currentTab.tab} Component</p>
            }

            {
                currentTab.to==='compliance-history' && <p>{currentTab.tab} Component</p>
            }

            {
                currentTab.to==='file-share' && <p>{currentTab.tab} Component</p>
            }

        </div>
    )
}

export default AssesmentsHolder