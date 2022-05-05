import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'

import './Accueil.css'

import { axiosInstance } from "../../utils/db"
import parse from "html-react-parser"

import { extractBodyFromHtml } from '../../utils/StringUtils'

const Accueil = () => {
    
    const [fluxHtml, setFluxHtml] = useState("")

    useEffect(() => {
        axiosInstance.get("")
            .then(res => {
                const body = extractBodyFromHtml(res.data)

                setFluxHtml(body)
            })
            .catch (err => {
                console.log(err)
            })
    }, [])
    
    
    return (
        <div className='accueil'>
            <Header active="accueil" />
            
            {
                fluxHtml.length > 0 ? parse(fluxHtml) : 
                    <p>Loading</p>
            }
        </div>
    )
}

export default Accueil