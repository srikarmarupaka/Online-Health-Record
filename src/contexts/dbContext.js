import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function DBContext() {
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const doctorsRef = db.collection('users').doc('doctors');
    const admimnRef = db.collection('users').doc('doctors');
    const usersRef = db.collection('users').doc('users');
    const collegesRef = db.collection('users').doc('colleges');
    const hospitalsRef = db.collection('users').doc('hospitals');
    
    function getUsers() {
        setLoading(true);
        usersRef.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setUsers(items);
            setLoading(false);
        })
    }

    async function addUsers() {
       await usersRef.set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
       });
   }
    
    useEffect(() => {
        getUsers();
    },[])

    if(loading) return <h1>Loading...</h1>
    return (
        <div>
            <h1>Users</h1>
            {
                users.map((user) => (
                    <div key={user.userid}>
                        <h2>{user.fullname}</h2>
                        <p>
                            {user.email} <br />
                            {user.phoneNumber} <br />
                            {user.address} <br />
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
