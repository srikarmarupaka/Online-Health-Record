import React, { useEffect, useState, useContext } from 'react'
import { db } from '../firebase'

const DBContext = React.createContext()
export function useAuth() {
    return useContext(DBContext)
}

export default function DBProvider({children}) {
    
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
        <DBContext.Provider>
            {children}
        </DBContext.Provider>
    )
}
