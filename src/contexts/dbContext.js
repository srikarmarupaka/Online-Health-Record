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

    async function addAdmin(admin) {
        const res = await admimnRef.add({ admin })
        console.log('Added document with ID: ', res.id);
    } 
    useEffect(() => {
        getUsers();
    },[])

    if(loading) return <h1>Loading...</h1>
    return (
        addAdmin
    )
}
