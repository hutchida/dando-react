import './App.css'
import Header from './components/Header';
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Header />
      <Hero title='Where the wasteland ends' link={{ href: "#albums", children: "listen" }} />
    </div>
  )
}
export default App;