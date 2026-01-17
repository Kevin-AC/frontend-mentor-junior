import { useEffect } from "react";
import Header from "./components/Header"
import Search from "./components/Search"
import UserCard from "./components/UserCard"
import { useFetchUser } from "./hooks/useFetchUser";

function App() {
  const {user,loading,error,getUser} = useFetchUser();
  useEffect(() => {
    getUser("Kevin-AC"); // Carga el mock o API
  },[]); // [] = se ejecuta una sola vez al montar

  return (
    <main className="bg-Neutral-900 w-full h-auto py-8 px-4 font-space  ">
      <div className="w-auto h-auto space-y-8 ">
        <Header/>
        <Search/>
        <UserCard user={user} loading={loading} error={error}/>
      </div>
    </main>
  )
}

export default App
