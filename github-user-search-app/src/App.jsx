import { useFetchUser } from "./hooks/useFetchUser";
import Header from "./components/Header"
import Search from "./components/Search"
import UserCard from "./components/UserCard"
function App() {
  const { user,getUser } = useFetchUser();
  return (
    <main className="dark:bg-Neutral-900 bg-Neutral-100 opacity-100 w-full h-auto py-8 px-4 font-space  ">
      <div className="w-auto h-auto space-y-8 ">
        <Header/>
        <Search getUser={getUser}/>
        <UserCard user={user}/>
      </div>
    </main>
  )
}

export default App
