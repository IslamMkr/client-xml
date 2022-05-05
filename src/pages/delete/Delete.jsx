import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { axiosInstance } from '../../utils/db'
import { useParams } from 'react-router-dom'
import PopUp from '../../components/PopUp/PopUp'
import "./Delete.css"

const Delete = () => {

	const { guid } = useParams();
	const [showPopUp, setShowPopUp] = useState(false)
	const [message, setMessage] = useState("")

	const togglePopUp = () => {
		setShowPopUp(true)
}	
	useEffect(() => {
		axiosInstance.delete(`/rss22/delete/${guid}`)
		.then(res => {
			setMessage(res.data)
			togglePopUp()
	})
	.catch(err => {
			console.log(err)
	})
	}, [])
    return (
      <div>
			<Header active="articles" />

			<div className='delete'>
								{
                showPopUp &&
                <PopUp message={message} onClose={() => setShowPopUp(false)} />
            		}  
            </div>
		</div>
    )
}

export default Delete