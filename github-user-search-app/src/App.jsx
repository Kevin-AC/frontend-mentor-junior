import { useFetchUser } from "./hooks/useFetchUser";
import Header from "./components/Header"
import Search from "./components/Search"
import UserCard from "./components/UserCard"
function App() {
  const { user,error,loading,getUser } = useFetchUser();
  return (
    <main className="dark:bg-Neutral-900 bg-Neutral-100 opacity-100 w-full min-h-screen  py-8 px-4 md:py-11 md:px-8 font-space lg:grid lg:place-content-center  ">
      <div className="w-auto h-auto space-y-8 ">
        <Header/>
        <Search getUser={getUser} error={error}/>
        <UserCard user={user} error={error} loading={loading}/>
      </div>
    </main>
  )
}

export default App
