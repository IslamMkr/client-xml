import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { axiosInstance } from '../../utils/db'
import { extractBodyFromHtml } from '../../utils/StringUtils'
import { useParams } from 'react-router-dom'

const Delete = () => {

	const [fluxHtml , setFluxHtml] = useState("")
	const { guid } = useParams();

	useEffect(() => {
		axiosInstance.delete(`/rss22/delete/${guid}`)
				.then( res => {
						const body = res.data

						setFluxHtml(body)
				})
	}, [])
    return (
      <div>
			<Header active="aide" />

			<div className='all-articles'>
                {
                    fluxHtml.length > 0 ? parse(fluxHtml) : 
                    
                    <p>Erreur</p>
                } 
            </div>
		</div>
    )
}

export default Delete