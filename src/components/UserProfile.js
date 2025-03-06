import React, {useState} from 'react';
import Group from './Group';
import './Profilenew.css';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {
    return <div>
    <br/>
    <center>
    <img src="https://www.vhv.rs/file/max/32/329401_profile-icon-png.png" height="150" width="150"/>
        <Group>
            <h2>Username:</h2> {stored.name}
        </Group>
       
        <Group>
            <h2>Contact:</h2> {stored.contact}
        </Group>
       
        <Group>
            <h2>Email:</h2> {stored.email}
        </Group>
       
        <Group>
            <button
                
                onClick={startEditCallback}
            >Edit</button>
        </Group>
        </center>
    </div>
}