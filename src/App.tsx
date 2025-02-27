
import './App.css'
import Message from './components/Message'

function App() {

  return (
    <>
      <section>
        <Message firstName='Pascal' lastName='Yakou' email='pascal@gmail'/>
        <Message firstName='Jean' lastName='Pierre'/>
        <Message firstName='Marc' lastName='Yakou'/>
      </section>
    </>
  )
}

export default App
