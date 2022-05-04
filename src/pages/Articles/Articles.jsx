import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import parse from 'html-react-parser'

const Articles = () => {

    useEffect(()=>{
        axios.get("http://localhost:8080/rss22/resume/html").then((res)=>{
            setfluxhtml(res.data.substring(res.data.indexOf("<body>")+6,res.data.lastIndexOf("</body>")));
        })
    }, [])



    const [fluxhtml , setfluxhtml] = useState("")

    const articles = [
        {
            guid: "lzknflklzref",
            title: "Article 01",
            published: "20-12-2022"
        },
        {
            guid: "lzknflfeffefklzref",
            title: "Article 02",
            published: "20-02-2022"
        }
    ]

    return (
        <div className='articles'>
            <Header active="articles" />

          {fluxhtml.length > 0 ? parse(fluxhtml) : <div>
                <h2>Liste des articles : </h2>
                <table>
                    <thead>
                        <tr>
                            <th> Guid </th>
                            <th> Titre </th>
                            <th> Date de publication </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articles.map (article => 
                                <tr key={article.guid}>
                                    <td><p>{article.guid}</p></td>
                                    <td><p>{article.title}</p></td>
                                    <td><p>{article.published}</p></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>}  
        </div>
    )
}

export default Articles