import React, { useState } from 'react'
import { Button,  Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../JS/Actions/contact'
import { Link } from 'react-router-dom' 

const Add = () => {
    const [newContact, setNewContact] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setNewContact ({...newContact,[e.target.name]: e.target.value})
    }
    const add = () => {
        dispatch(addContact(newContact))
    }
    return (
        <div>
            <div className='add'>
        
            <h1>Add Contact</h1>
            
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" name="name" value={newContact.name} onChange={handleChange}/>
        
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={newContact.email} onChange={handleChange}/>
        <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter your Phone" name="phone"value={newContact.phone} onChange={handleChange} />

            <Link to='/users'><Button className='bouton' variant="primary" type="submit" onClick={()=>add()}>Add Contact</Button></Link>
            
            </div>
            </div>
    )
}

export default Add