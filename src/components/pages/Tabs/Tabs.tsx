import React, { useState } from 'react'

import { BsThreeDotsVertical } from 'react-icons/bs'

type Tab = {
    id: string
    tab: string
}

interface AppProps {
    tabs: Tab[]
    currentTab: Tab
    changeTab?: (tab: Tab) => void
}

const Tabs = ({ tabs, currentTab, changeTab }: AppProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    document.body.addEventListener('keyup',(e)=>{
        if(e.key=='Escape'){
            setShowMenu(false)
        }
    })

    return (
        <>
            <div className='border-b text-xl relative'>
                <div className='absolute top-0 right-0
                sm:hidden'>
                    {
                        tabs.length > 1 &&
                        <BsThreeDotsVertical className='ml-auto mr-0 cursor-pointer text-gray-400
                    hover:text-green-light'
                            onClick={(): void => {
                                setShowMenu(!showMenu)
                            }} />
                    }

                    {
                        showMenu &&
                        <div className='sticky border-2 rounded-xl z-10 right-8  shadow-lg bg-white
                        sm:hidden'>
                            {
                                tabs.map((tab) => {
                                    if (tab.id !== currentTab.id) {
                                        return <p key={tab.id} className='cursor-pointer px-4 rounded-xl bg-white text-[16px]
                                    hover:bg-green-light hover:text-white'
                                            onClick={(): void => {
                                                changeTab && changeTab(tab)
                                                setShowMenu(false)
                                            }}>{tab.tab}</p>
                                    }
                                })
                            }
                        </div>
                    }
                </div>
                {
                    tabs.map((tab) => {
                        if (tab.tab == currentTab.tab) {
                            return <h1 key={tab.id} className='border-b-2 text-green-light border-green-light inline-block pr-8 mr-2 cursor-pointer font-bold'>{tab.tab}</h1>
                        } else {
                            return <h1 key={tab.id} className='hidden text-gray-400  pr-2 mr-2 cursor-pointer
                            sm:inline-block
                        hover:text-green-light'
                                onClick={(): void => {
                                    changeTab && changeTab(tab)
                                }}>{tab.tab}</h1>
                        }
                    })
                }
            </div>
        </>
    )
}

export default Tabs