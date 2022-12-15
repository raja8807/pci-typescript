import React, { useState,useContext } from 'react'

import { RxChevronRight, RxChevronDown } from 'react-icons/rx'

import { AiFillFlag,AiFillStar } from 'react-icons/ai'

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

interface AppProps {
    sub: SubDiv
}

const SubBranch = ({ sub }: AppProps) => {

    const [expanded, setExpanded] = useState<Boolean>(false)

    const currentEnd = useContext(AssessmentContext).currentEnd
    const changeCurrentEnd = useContext(AssessmentContext).changeCurrentEnd

    let y = sub.ends.some((end)=>{
        return end.end == currentEnd.end
    })

    return (
        <div>
            <div className={`flex items-center cursor-pointer ml-4 my-2 rounded-md
            ${y &&'bg-slate-300 shadow'}
            hover:bg-slate-200`}
                onClick={(): void => {
                    setExpanded(!expanded)
                }}>
                {
                    !expanded ? <RxChevronRight /> : <RxChevronDown />
                    
                }
                <p className='px-1'>{sub.sub}</p>
            </div>
            {
                expanded &&
                sub.ends.map((end, i) => {
                    return <div key={i} className={` px-1 w-full flex items-center`}
                        onClick={(): void => {
                            changeCurrentEnd(end)
                        }}>

                        <AiFillFlag className='cursor-pointer mr-1 text-yellow-400
                        hover:scale-125 hover:text-yellow-500'/>
                        <AiFillFlag className='cursor-pointer mr-1 text-red-400
                        hover:scale-125 hover:text-red-500'/>
                        

                        <div className={`${currentEnd.end == end.end && 'bg-white shadow'}  px-4 rounded-md flex items-center justify-between cursor-pointer w-full
                        ${currentEnd.end !== end.end && 'hover:bg-slate-200 '}`}>
                            <p>{end.end}</p>
                            <AiFillStar className='cursor-pointer text-sm text-yellow-400
                            hover:scale-125 hover:text-yellow-500'/>
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default SubBranch