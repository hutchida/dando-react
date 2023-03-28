import HeroTitle from "./HeroTitle";
import Link, { ILink } from "./Link";

const Hero = ({ title, link }: { title: string, link: ILink }) => {
  return (
    <div className="flex">
      <img src="img/hero.jpeg" className="h-screen w-screen object-cover" />
      <div className="absolute w-full h-full flex justify-center items-center flex-col" >
        <HeroTitle>{title}</HeroTitle>
        {link && <Link className="btn-yellow text-lg" {...link}>{link.children}</Link>}
      </div>

    </div >
  )
}
export default Hero;