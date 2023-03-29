import './App.css'
import Header from './components/Header';
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Header />
      {/* <Hero title='Where the wasteland ends' link={{ href: "#albums", children: "listen" }} /> */}
      <Hero title='Next&nbsp;show 29/04/23 Berlin' link={{ href: "https://gseggmbh.de/hauser/rockhaus/", target: "_blank", children: "more" }} />
    </div>
  )
}
export default App;