import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import parse from 'html-react-parser'

import { axiosInstance } from '../../utils/db'
import { extractBodyFromHtml } from '../../utils/StringUtils'

import "./Articles.css"

import { IoMdAdd, IoMdClose } from "react-icons/io"

import AddArticleForm from "../../components/AddArticle/AddArticleForm"
import AddArticleFile from "../../components/AddArticle/AddArticleFile"

const Articles = () => {

    const [fluxHtml , setFluxHtml] = useState("")
    const [isFormShowing , setIsFormShowing] = useState(false)
    const [formType, setFormType] = useState("form")

    useEffect(() => {
        axiosInstance.get("/rss22/resume/html")
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

            <hr />
            
            <div className='add-section'>
                <p>Ajouter un article</p>
                <div className={isFormShowing ? "btn-close btn" : "btn-add btn"} onClick={() => setIsFormShowing(!isFormShowing)}>
                    {
                        !isFormShowing ?
                       <IoMdAdd /> :
                       <IoMdClose />
                    }
                </div>
            </div>

            {
                isFormShowing && 
                <div className="form">
                    <div className='radios'>
                        <p><input type="radio" name="form-type" onChange={e => setFormType(e.target.value)} value="form" checked={formType === 'form'} /> Formulaire </p>
                        <p><input type="radio" name="form-type" onChange={e => setFormType(e.target.value)} value="file" checked={formType === 'file'} /> Fichier XML </p>
                    </div>
                    {
                        formType === "file" ?
                        <AddArticleFile /> :
                        <AddArticleForm />
                    }
                </div>
            }
        </div>
    )
}

export default Articles