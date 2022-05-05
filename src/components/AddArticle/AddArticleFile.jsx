import React, { useState } from 'react'

import { axiosInstance } from "../../utils/db"

import PopUp from '../PopUp/PopUp'

const AddArticleFile = () => {

	const [files, setFiles] = useState([])

    const [showPopUp, setShowPopUp] = useState(false)

    const [message, setMessage] = useState("")

	
    const togglePopUp = () => {
        setShowPopUp(true)
    }

	const handleAddArticle = () => {
		if (files === null) {
			setMessage("Aucun fichier XML n'est selectionné !")
		} else {
			
			let formData = new FormData()
			formData.append("file", files[0])
			
			axiosInstance.post(
				"/insert",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data"
					} 
				}).then(res => { 
					if (res.data !== undefined) {
						setMessage(res.message)
					} else {
						setMessage(res.data)
					}
				}).catch(err => {
					console.log(err)
				})
		}
					
		togglePopUp()
	}

    return (
        <div className='add-article'>
            <div className="form-group">
				<label>Fichier XML :</label>
				<input type="file" accept="text/xml" onChange={e => setFiles(e.target.files)} />
            </div>
			<button className="btn btn-form" onClick={handleAddArticle}>Ajouter</button>
		
			{
                showPopUp &&
                <PopUp message={message} onClose={() => setShowPopUp(false)} />
            }  
		</div>        
    )
}

export default AddArticleFile