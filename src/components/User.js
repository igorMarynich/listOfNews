import React, {useState, useContext} from 'react'
import './user.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import AdminContext from '../context/AdminContext'

const User = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {setIsAdmin, setStatus} = useContext(AdminContext)
    const history = useHistory()

    const sendDateToTheServer = e => {
        e.preventDefault()
        axios.post('google.com', {
            login,
            password
          })
          .then((response) => {
            console.log(response);
            setStatus(response)
            setIsAdmin(true)
          }, (error) => {
            setStatus(error.message)
            console.log(error);
            setIsAdmin(true)
          });
          history.push('/')
    }

    return (
        <div className="container">
            <div className="cardUser">
            <h1>User</h1>
            <form className="displayForm">
                <div className="fieldOfUser">
                    <label>
                        Login:
                        <input
                            type="text"
                            name="name"
                            placeholder="Login"
                            className="userInput"
                            value={login}
                            onChange={e => setLogin(e.target.value)}/>
                    </label>
                </div>
                <div className="fieldOfUser">
                    <label>
                        Password:
                        <input 
                            type="text"
                            name="name" 
                            placeholder="Password" 
                            className="userInput"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </label>
                </div>
                <div>
                    <button
                        className="submitButton"
                        onClick={sendDateToTheServer}
                        >
                        Send
                        </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default User