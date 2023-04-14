import HeroTitle from "./HeroTitle";
import Link, { ILink } from "./Link";

const Hero = ({ title, link }: { title: string, link: ILink }) => {
  return (
    <div className="flex">
      <img src="img/hero.jpeg" className="h-screen w-screen object-cover" alt={title} />
      <div className="absolute w-full h-full flex justify-center items-center flex-col" >
        <div className="flex flex-col justify-center items-center max-w-230 p-10">

          <HeroTitle>{title}</HeroTitle>
          {link && <Link className="btn-yellow text-lg" {...link}>{link.children}</Link>}
        </div>
      </div>

    </div >
  )
}
export default Hero;