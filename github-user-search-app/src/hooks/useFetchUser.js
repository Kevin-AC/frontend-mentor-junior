import { useState } from "react";


const API_URL = "https://api.github.com/users/";

export const useFetchUser=()=>{
    const [user,setUser]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]= useState(false);

    const getUser=async(userName)=>{
        setLoading(true);
        setError(null);
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
    return {user,error,loading,getUser}
}
