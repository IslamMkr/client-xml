import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import parse from 'html-react-parser'

import { axiosInstance } from '../../utils/db'
import { extractBodyFromHtml } from '../../utils/StringUtils'

import "./Article.css"
import { useParams } from 'react-router-dom'



const Article = () => {

    const [fluxHtml , setFluxHtml] = useState("")
    //const [isFormShowing , setIsFormShowing] = useState(false)
    const { guid } = useParams();

    useEffect(() => {
        axiosInstance.get(`/rss22/html/${guid}`)
            .then( res => {
                const body = extractBodyFromHtml(res.data)

                setFluxHtml(body)
            })
    }, [])

    return (
        <div className='articles'>
            <Header active="articles" />

            <div className='all-articles'>
                {
                    fluxHtml.length > 0 ? parse(fluxHtml) : 
                    
                    <p>Erreur</p>
                } 
            </div>
        </div>
    )
}

export default Article