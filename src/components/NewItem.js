import React, {useContext} from 'react'
import AdminContext from '../context/AdminContext'
import './newItem.css'
import {useHistory} from 'react-router-dom'

const NewItem = ({data}) => {
    const {isAdmin, setDataDetailPage} = useContext(AdminContext)
    const history = useHistory()
    return (
        <div className='containerNewItem'>
            <div style={{textAlign: 'center'}}>
                <h1>
                    {`title of news ${data.id}`}
                </h1>
            </div>
            {!isAdmin && <div className="partOfNews">
                            <p className="nameOfOptions">Short description:</p>
                            <p className="contentOfOptions" >{data.title}</p>
                        </div>}
            {isAdmin && <div className="partOfNews">
                            <p className="nameOfOptions">Description:</p>
                            <p className="contentOfOptions" >HARD CODE!!!</p>
                        </div>}
            <div className="partOfNews">
                <p className="nameOfOptions">Data:</p>
    <p className="contentOfOptions" >{1900 + data.id}</p>
            </div>
            <button onClick={() => {
                setDataDetailPage(data)
                history.push(`/news/${data.id}`)
            }}>
                Detail page
            </button>
        </div>
    )
}

export default NewItem