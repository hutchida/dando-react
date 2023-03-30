import { useEffect, useRef, useState } from 'react';
import './App.css'
import { nav } from './assets/data';
import Header from './components/Header';
import Hero from './components/Hero'
import News from './components/News'
import Video from './components/Video'

function App() {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const vibeRef = useRef<null | HTMLDivElement>(null);
  const liveRef = useRef<null | HTMLDivElement>(null);
  const buyRef = useRef<null | HTMLDivElement>(null);
  const moreRef = useRef<null | HTMLDivElement>(null);
  const [jump, setJump] = useState("");

  useEffect(() => {
    if (jump === "hero") {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
      setJump("");
    }
    if (jump === "vibe") {
      vibeRef.current?.scrollIntoView({ behavior: "smooth" });
      setJump("");
    }
    if (jump === "live") {
      liveRef.current?.scrollIntoView({ behavior: "smooth" });
      setJump("");
    }
    if (jump === "buy") {
      buyRef.current?.scrollIntoView({ behavior: "smooth" });
      setJump("");
    }
    if (jump === "more") {
      moreRef.current?.scrollIntoView({ behavior: "smooth" });
      setJump("");
    }
  }, [jump])

  return (
    <div>
      <Header title="Marmaduke Dando" nav={nav} onClick={setJump} />
      <section ref={heroRef}>
        {/* <Hero title='Where the wasteland ends' link={{ href: "#albums", children: "listen" }} /> */}
        <Hero title='Next&nbsp;show 29/04/23 Berlin' link={{ onClick: () => setJump("live"), children: "more" }} />
      </section>
      <section ref={vibeRef}>
        <Video youtube="Wi9ggsd0Lsw" />
      </section>
      <section ref={liveRef}>
        <News title="News" description="Next live show will be at the Rockhaus in Berlin, Buchberger Straße 6, 10365, on April 29th, 2023, doors at 8pm. First on the bill, followed by Silky Psyche, and Inspectre" link={{ href: "https://www.berlin.de/tickets/suche/orte/rockhaus-berlin-0347ac7e-efc2-46d8-9022-16ff21964ed3/", target: "_blank", children: "Location" }} />
      </section>
      <section ref={buyRef}>
        <News title="Buy" description="...and listen" link={{ href: "https://marmadukedando.bandcamp.com/", target: "_blank", children: "Bandcamp" }} />
      </section>
      <section ref={moreRef}>
        <News title="Socials" description="Follow on..." link={{ href: "https://www.facebook.com/Marmaduke-Dando-369791493240/", target: "_blank", children: "Facebook" }} />
      </section>
    </div>
  )
}
export default App;