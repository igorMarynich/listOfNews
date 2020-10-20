import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import NewItem from '../components/NewItem'
import Header from '../components/Header'
import AdminContext from '../context/AdminContext'


const News = () => {
    const [news, setNews] = useState([])
    const {status, isAdmin} = useContext(AdminContext)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setNews(res.data))
    }, [])

    return (
        <div>
            <Header />
            {isAdmin && <h1 style={{color: 'red'}}>{status}</h1>}
            {news.map((newItem, index) => (
                <div key={index}>
                    <NewItem data={newItem} />
                </div>
            ) )}
        </div>
    )
}

export default News