import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import parse from 'html-react-parser'

import { axiosInstance } from '../../utils/db'
import { extractBodyFromHtml } from '../../utils/StringUtils'

import "./Articles.css"

const ArticlesHtml = () => {

    const [fluxHtml , setFluxHtml] = useState("")

    useEffect(() => {
        axiosInstance.get("/rss22/resume/html")
            .then( res => {
                const body = extractBodyFromHtml(res.data)

                setFluxHtml(body)
            })
    }, [])

    return (
        <div className='articles'>
            <Header active="html" />

            <div className='all-articles'>
                {
                    fluxHtml.length > 0 ? parse(fluxHtml) : 
                    <p>Loading</p>
                } 
            </div>
        </div>
    )
}

export default ArticlesHtml