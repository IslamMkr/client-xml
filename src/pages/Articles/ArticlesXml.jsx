import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'

import { axiosInstance } from '../../utils/db'

import "./Articles.css"

const ArticlesXml = () => {
    
    const [xmlData, setXmlData] = useState("")

    useEffect(() => {
        axiosInstance.get("/rss22/resume/xml")
            .then( res => {
                setXmlData(res.data)
            })
    }, [])
    

    return (
        <div className='articles'>
            <Header active="xml" />
        
            <p id="xml-data">{xmlData}</p>
        </div>
    )
}

export default ArticlesXml