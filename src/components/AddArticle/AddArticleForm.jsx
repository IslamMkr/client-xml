import React, { useState } from 'react'

import "./AddArticle.css"

import { axiosInstance } from "../../utils/db"
import { IoMdAdd, IoMdClose } from "react-icons/io"

import PopUp from "../PopUp/PopUp"

const AddArticle = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [published, setPublished] = useState("")
    const [updated, setUpdated] = useState("")
    const [imageType, setImageType] = useState("JPG")
    const [imageUrl, setImageUrl] = useState("")
    const [imageAlt, setImageAlt] = useState("")
    const [content, setContent] = useState("")
    const [contentType, setContentType] = useState("text")
    const [author, setAuthor] = useState("")
    const [contributor, setContributor] = useState("")
    const [authorEmail, setAuthorEmail] = useState("")
    const [contributorEmail, setContributorEmail] = useState("")

    const [addImage, setAddImage] = useState(false)

    const [showPopUp, setShowPopUp] = useState(false)

    const [message, setMessage] = useState("")

    const togglePopUp = () => {
        setShowPopUp(true)
    }

    const handleAddArticle = () => {
        const fluxXml = getDataAsXml()
        
        axiosInstance.post("/insert", fluxXml,
            {   
                headers: {
                    "Content-Type": "application/xml"
                }
            }
        )
            .then(res => {
                setMessage(res.data)
                togglePopUp()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getDataAsXml = () => {
        return `<item>
                <guid></guid>
                <title>${title}</title>
                <category term="${category}"/>
                ${
                    published === "" ? 
                    `<updated>${updated}:00</updated>` :
                    `<published>${published}:00</published>`
                }
                ${
                    imageUrl !== "" ? 
                    `<image type="${imageType}" href="${imageUrl}" alt="${imageAlt}" />` :
                    ""
                }
                <content type="${contentType}" href="">${content}</content>
                ${
                    author === "" ? 
                    `<contributor>
                        <name>${contributor}</name>
                        <email>${contributorEmail}</email>
                    </contributor>` :
                    `<author>
                        <name>${author}</name>
                        <email>${authorEmail}</email>
                    </author>`
                }
            </item>`
    }

    const handleAddImage = () => {
        setImageUrl("")
        setImageAlt("")

        setAddImage(!addImage)
    }

    return (
        <div className='add-article'>          
            <div className="form-group">
                <label>Titre :</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Catégorie :</label>
                <input type="text" value={category} onChange={e => setCategory(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Date de publication :</label>
                <input type="datetime-local" value={published} onChange={e => setPublished(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Date de modification :</label>
                <input type="datetime-local" value={updated} onChange={e => setUpdated(e.target.value)}/>
            </div>
            <div className="form-group">
                <div className="image" onClick={handleAddImage}>
                    <label>Image</label>
                    {
                        addImage ?
                        <IoMdClose color='red' /> :
                        <IoMdAdd color='green' /> 
                    } 
                </div>
                {
                    addImage && 
                    <div className='img-infos'>
                        <div className="form-group">
                            <label>Type d'image :</label>
                            <div className='radios'>
                                <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="JPG" checked={imageType === 'JPG'} /> JPG </p>
                                <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="PNG" checked={imageType === 'PNG'} /> PNG </p>
                                <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="BMP" checked={imageType === 'BMP'} /> BMP </p>
                                <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="GIF" checked={imageType === 'GIF'} /> GIF </p>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>URL de l'image :</label>
                            <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Description de l'image :</label>
                            <input type="text" value={imageAlt} onChange={e => setImageAlt(e.target.value)} />
                        </div>
                    </div>
                }
            </div>
            <div className="form-group content">
                <label>Contenu :</label>
                <div className='radios'>
                    <p><input type="radio" name="content-type" onChange={e => setContentType(e.target.value)} value="text" checked={contentType === 'text'} /> Texte </p>
                    <p><input type="radio" name="content-type" onChange={e => setContentType(e.target.value)} value="src" checked={contentType === 'src'} /> URL </p>
                </div>
                <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Auteur :</label>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email du l'auteur :</label>
                <input type="email" value={authorEmail} onChange={e => setAuthorEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Contributeur :</label>
                <input type="text" value={contributor} onChange={e => setContributor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email du contributeur :</label>
                <input type="email" value={contributorEmail} onChange={e => setContributorEmail(e.target.value)}/>
            </div>

            <button className='btn-form btn' onClick={handleAddArticle}>Ajouter</button>
        
            
            {
                showPopUp &&
                <PopUp message={message} onClose={() => setShowPopUp(false)} />
            }  
        </div>
    )
}

export default AddArticle