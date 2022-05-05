import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import parse from 'html-react-parser'

import { axiosInstance } from '../../utils/db'
import { extractBodyFromHtml } from '../../utils/StringUtils'

import "./ArticleXml.css"
import { useParams } from 'react-router-dom'



const ArticleXml = () => {

    const { guid } = useParams();
	const [message, setMessage] = useState("")

    useEffect(() => {
        axiosInstance.get(`/rss22/resume/xml/${guid}`)
        .then(res => {
			setMessage(res.data)
	    })
	    .catch(err => {
			console.log(err)
	    })
    }, [])

    return (
        <div className='articles'>
            <Header active="articles" />

            <div className='all-articles'>
            <p>{message}</p>
            </div>
        </div>
    )
}

export default ArticleXml