
import './App.css'
import Users from './pages/Users'
import { USERS } from './utils/data'



function App() {

  return (
    <>
      <section className="grid">
          <Users users={USERS} />
      </section>
      
    </>
  )
}

export default App
