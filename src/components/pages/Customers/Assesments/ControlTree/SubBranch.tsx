import React, { useState,useContext } from 'react'

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
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
            ${y&&'bg-slate-200'}
            hover:bg-slate-200`}
                onClick={(): void => {
                    setExpanded(!expanded)
                }}>
                {
                    !expanded ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />
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

                        <AiFillFlag className='cursor-pointer mr-1 text-yellow-500'/>
                        <AiFillFlag className='cursor-pointer mr-1 text-red-500'/>
                        

                        <div className={`${currentEnd.end == end.end && 'bg-white'} px-4 rounded-md flex items-center justify-between cursor-pointer w-full
                        ${currentEnd.end !== end.end && 'hover:bg-slate-200'}`}>
                            <p>{end.end}</p>
                            <AiFillStar className='cursor-pointer text-sm text-yellow-500'/>
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default SubBranch