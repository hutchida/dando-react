import './App.css'
import Header from './components/Header';
import Hero from './components/Hero'
import News from './components/News'

function App() {
  return (
    <div>
      <Header />
      {/* <Hero title='Where the wasteland ends' link={{ href: "#albums", children: "listen" }} /> */}
      <Hero title='Next&nbsp;show 29/04/23 Berlin' link={{ href: "#news", target: "_self", children: "more" }} />
      <News anchor="news" title="News" description="Next live show will be at the Rockhaus in Berlin, Buchberger Straße 6, 10365, on April 29th, 2023, doors at 8pm. First on the bill, followed by Silky Psyche, and Inspectre" link={{ href: "https://www.berlin.de/tickets/suche/orte/rockhaus-berlin-0347ac7e-efc2-46d8-9022-16ff21964ed3/", target: "_blank", children: "Location" }} />
    </div>
  )
}
export default App;