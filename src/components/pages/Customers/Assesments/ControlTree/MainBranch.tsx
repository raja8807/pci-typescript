import { type } from '@testing-library/user-event/dist/type'
import React, { useState,useContext } from 'react'

import SubBranch from './SubBranch'
import { RxChevronRight, RxChevronDown } from 'react-icons/rx'
import { TbFileDescription } from 'react-icons/tb'
import AssessmentContext from '../AssessmentContext'

type Tab = {
    tab:String
}

type End = {
    end: String
    tabs:Tab[]
}

type SubDiv = {
    sub: String
    ends: End[]
}

type MainDiv = {
    main: String
    subs: SubDiv[]
}

interface AppProps {
    branch: MainDiv
}

const MainBranch = ({ branch }: AppProps) => {

    const [expanded, setExpanded] = useState<Boolean>(false)

    let currentEnd = useContext(AssessmentContext).currentEnd

    let y = branch.subs.some((sub)=>{
        return sub.ends.some((end)=>{
            return end.end == currentEnd.end
        })
    })

    console.log(y);
    
    

    return (
        <div >
            <div className={`flex items-center cursor-pointer rounded-md my-2
            ${y&& 'bg-slate-300 shadow'}
            hover:bg-slate-200 `}
                onClick={(): void => {
                    setExpanded(!expanded)
                }}>
                {
                    !expanded ? <RxChevronRight/> : <RxChevronDown />
                }
                <TbFileDescription className='text-green-dark'/>
                {
                    <p className='px-1'>{branch.main}</p>
                }
            </div>
            {
                expanded &&
                branch.subs.map((sub, i) => {
                    return <SubBranch key={i} sub={sub}/>
                })
            }
        </div>
    )
}

export default MainBranch