import React, { useState } from 'react'

import "./AddArticle.css"

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

    const handleAddArticle = () => {
        console.log(contentType)
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
                <label>Image :</label>
                <div className='img-infos'>
                    <div className="form-group">
                        <label>Type d'image :</label>
                        <div className='radios'>
                            <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="JPG" checked={imageType === 'JPG'} /> JPG </p>
                            <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="PNG" checked={imageType === 'PNG'} /> PNG </p>
                            <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="BMP" checked={imageType === 'BMP'} /> BMP </p>
                            <p><input type="radio" name="image-type" onChange={e => setImageType(e.target.value)} value="GIF" checked={imageType === 'GIF'} /> GIF </p>
                        </div>
                        <input type="text" value={updated} onChange={e => setUpdated(e.target.value)}/>
                    </div>
                </div>
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
        </div>
    )
}

export default AddArticle