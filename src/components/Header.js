import React, {useContext} from 'react'
import AdminContext from '../context/AdminContext'
import {useHistory} from 'react-router-dom'
import './header.css'

const Header = () => {
    const history = useHistory()
    const {isAdmin, setIsAdmin} = useContext(AdminContext)
    return (
        <div className="header">
            {!isAdmin && <button onClick={() => history.push('/user')}>
                Login
            </button>}
            {isAdmin && <button onClick={() => setIsAdmin(false)}>
                Logout
            </button>}
        </div>
    )
}

export default Header