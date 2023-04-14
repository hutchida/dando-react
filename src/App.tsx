import { useEffect, useRef, useState } from 'react';
import './App.css'
import { data, nav, seo } from './assets/data';
import Header from './components/Header';
import Hero from './components/Hero'
import News from './components/News'
import Video from './components/Video'
import { Helmet } from "react-helmet";

function App() {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const vibeRef = useRef<null | HTMLDivElement>(null);
  const newsRef = useRef<null | HTMLDivElement>(null);
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
    if (jump === "news") {
      newsRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <Helmet>
        <meta property="og:title" content="Marmaduke Dando"></meta>
        <meta property="og:description" content="Bard of disempire"></meta>
        <meta property="og:url" content="https://www.marmadukedando.com/" />
        <meta property="og:image:secure" content={seo.ogImage} />

        <title>{data.title}</title>
      </Helmet>
      <section>
        <Header title="Marmaduke Dando" nav={nav} onClick={setJump} />
      </section>
      <section ref={heroRef}>
        {/* <Hero title='Where the wasteland ends' link={{ href: "#albums", children: "listen" }} /> */}
        <Hero title='Next&nbsp;show 29/04/23 Berlin' link={{ onClick: () => setJump("live"), children: "more" }} />
      </section>
      <section ref={vibeRef}>
        <Video youtube="Wi9ggsd0Lsw" />
      </section>
      <section ref={newsRef}>
        <News title="News" description="Next live show will be at the Rockhaus in Berlin, Buchberger Straße 6, 10365, on April 29th, 2023, doors at 8pm. First on the bill, followed by Silky Psyche, and Inspectre" link={{ href: "https://fb.me/e/2tW0FW1n3", target: "_blank", children: "Event" }} />
      </section>
      <section ref={buyRef}>
        <News title="Buy" description="...and listen" link={{ href: "https://marmadukedando.bandcamp.com/", target: "_blank", children: "Bandcamp" }} />
      </section>
      <section ref={moreRef}>
        <News title="More" description="Follow on..." link={{ href: "https://www.facebook.com/Marmaduke-Dando-369791493240/", target: "_blank", children: "Facebook" }} />
      </section>
    </div>
  )
}
export default App;