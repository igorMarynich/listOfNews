import React, {useState} from 'react'
import AdminContext from './AdminContext'

const StateContext = ({children}) => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [idItem, setIdItem] = useState('')
    const [dataDetailPage, setDataDetailPage] = useState({})
    const [status, setStatus] = useState('')
    
    return (
        <AdminContext.Provider value={{
            isAdmin, setIsAdmin,
            idItem, setIdItem,
            dataDetailPage, setDataDetailPage,
            status, setStatus
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export default StateContext