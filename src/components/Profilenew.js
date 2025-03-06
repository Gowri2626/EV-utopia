import React,{ useState } from 'react';
import './Profilenew.css';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
import Navbar from '../nav/Navbar';

function randomName() {
    return "Gowri" 
}
function randomContact() {
    return "1245678998" 
}
function randomEmail() {
    return "sgowrinkl@gmail.com" 
}
function Profilenew() {
    
    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState(randomName());
    const [contact, setContact] = useState(randomContact());
    const [email, setEmail] = useState(randomEmail());
    

    const stored = {name,contact,email};
    

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setContact(result.contact);
            setEmail(result.email);
           
        }        
        setEditMode(false);
    }

    return (

        <div className="pro1">
        <Navbar/>
        <div className="hole">
            <div className="App">                 
                {
                    editMode
                        ? <>
                            <center><h1>My Profile</h1></center><br/>
                            
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                           
                        </>
                        : <>

<center><h1>My Profile</h1></center>
                            
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
        </div>
    );
}

export default Profilenew;
