import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export default function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    function updatePassword(password) {
        return currentUser.updateEmail(password)
    }
    function signup(email, password){
       return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password){
       return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function forgotPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        
        const unsunscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsunscribe
    }, [])
    const value ={currentUser, signup, login, logout, forgotPassword, updateEmail, updatePassword}
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
