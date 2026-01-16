import Header from "./components/Header"
import Search from "./components/Search"
import UserCard from "./components/UserCard"

function App() {

  return (
    <main className="bg-Neutral-900 w-full h-auto py-8 px-4 font-space  ">
      <div className="w-auto h-auto space-y-8 ">
        <Header/>
        <Search/>
        <UserCard/>
      </div>
    </main>
  )
}

export default App
