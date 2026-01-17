import { useState } from "react";
import { userMock } from "../mocks/userMock.js"

const API_URL = "https://api.github.com/users/";
const USE_MOCK=true;

export const useFetchUser=()=>{
    const [user,setUser]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]= useState(false);

    const getUser=async(userName)=>{
        setLoading(true);
        setError(null);
        if(USE_MOCK){
            await new Promise (resolve=>setTimeout(resolve,800));
            setUser(userMock);
            setLoading(false);
            return;
        }
        try{
            const response = await fetch(`${API_URL}${userName}`)
            if(!response.ok) throw new Error("No results")
            const data = await response.json();
            
            const formattedDate=(isoDate)=>{
                const fecha = new Date(isoDate);
                const opciones = { day: 'numeric', month: 'short', year: 'numeric' };
                return new Intl.DateTimeFormat('en-GB', opciones).format(fecha);
            }
            
            const{
                avatar_url: avatar,
                name,
                login: username,
                created_at: joined,
                public_repos: repos,
                followers,
                following,
                bio,
                location,
                twitter_username: twitter,
                blog: website,
                company,
            }=data;
            const formattedUser={
                avatar,
                name: name || username,
                username,
                joined:`Joined ${formattedDate(joined)}`,
                repos,
                followers,
                following,
                bio: bio || "This profile has no bio",
                location: location || "Not Available",
                twitter: twitter || "Not Available",
                website: website || "Not Available",
                company: company || "Not Available",
            }
            setUser(formattedUser);
        }catch(e){
            setError(e.message);
            setUser(null);
            console.log('Error',e)
        } finally {
        setLoading(false);
    }
        
    }
    console.log("🔍 useFetchUser states:", { user, error, loading });
    return {user,error,loading,getUser}
    
}
