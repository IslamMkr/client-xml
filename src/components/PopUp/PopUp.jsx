import React from 'react'

import { IoMdClose } from "react-icons/io"

import "./PopUp.css"

const PopUp = ({ message, onClose }) => {
    return (
		<div className='popup'>
			<div className="inner-popup">
				<div className="popup-header">
					<h4>Resultat retourné </h4>
					<div className="btn-close btn" onClick={() => onClose()}>
							<IoMdClose />
					</div>
				</div>
				<p>{message}</p>
			</div>
		</div>
    )
}

export default PopUp