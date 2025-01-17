import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {auth} from '../firebase/firebase.config'
 
import UseAxiosPublic from "../Hook/UseAxiosPublic";

 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = UseAxiosPublic();
 

    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)


    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);


    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, avatar) =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: avatar
            
        })

       
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            // console.log('current user', currentUser);
      

            if(currentUser){
                // get token and store client site

                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                 if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
    
                    }
                })



            }
            else{
                //TODO: remove token


            }
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        updateUserProfile,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;