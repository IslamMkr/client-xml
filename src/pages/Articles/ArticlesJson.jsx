import React, { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'

import "./Articles.css"

import { IoMdAdd, IoMdClose } from "react-icons/io"

import AddArticleForm from "../../components/AddArticle/AddArticleForm"
import AddArticleFile from "../../components/AddArticle/AddArticleFile"

import { axiosInstance } from '../../utils/db'

const ArticlesJson = () => {

    const [articles, setArticles] = useState([])
    const [isFormShowing , setIsFormShowing] = useState(false)
    const [formType, setFormType] = useState("form")

    useEffect(() => {
        axiosInstance.get("/rss22/resume/json")
            .then(res => {
                setArticles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    const showArticleDetails = (guid) => {
        window.location.href = `/articles/html/${guid}`
    }

    const deleteArticle = (guid) => {
        window.location.href = `/articles/delete/${guid}`
    }

    return (
        <div className='articles'>
            <Header active="json" />

            <div className="all-articles">
                <div className='articles-header'>
                    <h2>Articles</h2>
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

                {
                    articles === [] ?
                    <h4>Aucun articles n'est disponible!</h4> :
                    articles.map(article => 
                            <div className='article-representation'>
                                <div className='article-rep'>
                                    <p>GUID :</p>
                                    <h4>{article.guid}</h4>
                                </div>
                                <div className='article-rep'>
                                    <p>Titre :</p>
                                    <h4>{article.title}</h4>
                                </div>
                                <div className='article-rep'>
                                    <p>Date de publication :</p>
                                    <h4>{article.published}</h4>
                                </div>
                                <div className='btn-section'>
                                    <button className='btn btn-add' onClick={() => showArticleDetails(article.guid)}>Consulter</button>
                                    <button className='btn btn-close' onClick={() => deleteArticle(article.guid)}>Supprimer</button>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}

export default ArticlesJson