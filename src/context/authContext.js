import React, { createContext, useEffect, useState } from 'react'

export  const AuthContext =createContext();

export const AuthContextProvider = ({children})=>{
   
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));

    const login = ()=>{
        //To DO
        setCurrentUser({id:1,name:"Abhishek Pal",profilePicture:"https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg"});
    };

    useEffect(() => { 
     localStorage.setItem("user",JSON.stringify(currentUser));
    }, [currentUser])
    
    return (
        <AuthContext.Provider value={{currentUser,login }}>
            {children}
        </AuthContext.Provider>
    )
}


