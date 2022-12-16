import React, { useEffect, useState, useContext } from "react"

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import AppContext from "../../../../context/AppContext"

import AssessmentContext from '../AssessmentContext'

type CurrentTab = {
    tab?: string
    data?: string
}

interface AppProps {
    currentTab: CurrentTab
}

const TextEditor = ({ currentTab }: AppProps) => {

    const [value, setValue] = useState(currentTab.data)

    useEffect(() => {
        setValue(`${currentTab.data}</br> <p> from tab </p> <h1>${currentTab.tab}</h1>`)
    }, [currentTab])

    return <div className="my-5">
        <ReactQuill theme="snow" value={value} onChange={setValue}></ReactQuill>
        <button className=" px-5 rounded-md bg-green-light text-white m-2">Save</button>
    </div>
}

export default TextEditor