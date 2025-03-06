import React, {useState} from 'react';
import Group from './Group';
import './Profilenew.css';
export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

console.log("Edit User Profile");

    const [name, setName] = useState(stored.name);
    const [contact, setContact] = useState(stored.contact);
    const [email, setEmail] = useState(stored.email);
    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({name,contact,email});
    }
return <>
    <center>
    <img src="https://www.vhv.rs/file/max/32/329401_profile-icon-png.png" height="150" width="150" alt="profile"/>
        
        <Group>            
            <h2>Username:</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            required/>            
        </Group>
        <Group>            
            <h2>Contact:</h2>
            <input
                type='tel'
                value={contact}
                onChange={e => setContact(e.target.value)}
           required />            
        </Group>
        <Group>            
            <h2>Email:</h2>
            <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            required/>            
        </Group>
        
        <Group>
            <button  onClick={handleSaveClicked}>Save</button>
            <button  onClick={handleCancelClicked}>Cancel</button>
        </Group>
        </center>
    </>
}