import React, {useContext} from 'react'
import AdminContext from '../context/AdminContext'
import './newItem.css'
import {useHistory} from 'react-router-dom'

const DetailPage = () => {
    const {dataDetailPage} = useContext(AdminContext)
    const history = useHistory()
    return (
        <div className='containerNewItem'>
            <div style={{textAlign: 'center'}}>
                <h1>
                    {`title of news ${dataDetailPage.id}`}
                </h1>
            </div>
            <div className="partOfNews">
                            <p className="nameOfOptions">Full description:</p>
                            <p className="contentOfOptions" >{dataDetailPage.body}</p>
                        </div>
            <div className="partOfNews">
                <p className="nameOfOptions">Data:</p>
                <p className="contentOfOptions" >{`${1900 + dataDetailPage.id}`}</p>
            </div>
            <button onClick={() => {
                history.push('/')
            }}>
               Back
            </button>
        </div>
    )
}

export default DetailPage