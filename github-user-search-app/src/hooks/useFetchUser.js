import { useState } from "react";
//import { userMock } from "../mocks/userMock.js"

const API_URL = "https://api.github.com/users/";
const USE_MOCK=false;

export const useFetchUser=()=>{
    const [user, setUser] = useState({
        avatar: "/assets/User profile.svg",
        name: "The Octocat",
        username: "octocat",
        joined: "Joined 25 Jan 2011",
        bio: "This profile has no bio",
        repos: 8,
        followers: 3938,
        following: 9,
        location: "San Francisco",
        website: "https://github.blog",
        twitter: "Not Available",
        company: "@github"
    })
    const [error,setError]=useState(false);
    const [loading,setLoading]= useState(false);

    const getUser=async(userName)=>{
        if (!userName?.trim()) return  
        setError(false);
        setLoading(true);
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 2000))
        try{
            const [data] = await Promise.all([
                fetch(`${API_URL}${userName}`).then(async (response) => {
                    if (!response.ok) throw new Error("No results")
                    return response.json()
                }),
                minLoadingTime
            ])


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
            setError(false)
        }catch(e){
            
            console.log('Error',e)
            await minLoadingTime
            setError(true);
        } finally {
        setLoading(false);
    }
        
    }
    //console.log("🔍 useFetchUser states:", { user, error, loading });
    return {user,error,loading,getUser}
    
}
