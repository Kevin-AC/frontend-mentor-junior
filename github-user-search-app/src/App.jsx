import Header from "./components/Header"
import Search from "./components/Search"

function App() {

  return (
    <main className="bg-Neutral-900 w-full h-screen py-8 px-4 font-space  ">
      <div className="w-auto h-auto space-y-8 ">
        <Header/>
        <Search/>
      </div>
    </main>
  )
}

export default App
