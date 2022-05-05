import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { axiosInstance } from '../../utils/db'
import { extractBodyFromHtml } from '../../utils/StringUtils'

const Aide = () => {

	const [fluxHtml , setFluxHtml] = useState("")
	useEffect(() => {
		axiosInstance.get("/help")
				.then( res => {
						const body = extractBodyFromHtml(res.data)

						setFluxHtml(body)
				})
	}, [])
    return (
      <div>
			<Header active="aide" />

			<div className='all-articles'>
                {
                    fluxHtml.length > 0 ? parse(fluxHtml) : 
                    
                    <p>Loading</p>
                } 
            </div>
		</div>
    )
}

export default Aide