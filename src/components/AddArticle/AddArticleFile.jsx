import React, { useState } from 'react'

import { axiosInstance } from "../../utils/db"

const AddArticleFile = () => {

	const [files, setFiles] = useState([])

	const handleAddArticle = () => {
		let formData = new FormData()
		formData.append("file", files[0])
		
		axiosInstance.post(
			"/insert",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data"
				} 
			}
		).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	}

    return (
        <div className='add-article'>
            <div className="form-group">
				<label>Fichier XML :</label>
				<input type="file" accept="text/xml" onChange={e => setFiles(e.target.files)} />
            </div>
			<button className="btn btn-form" onClick={handleAddArticle}>Ajouter</button>
		</div>        
    )
}

export default AddArticleFile