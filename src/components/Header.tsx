import HeroTitle from "./HeroTitle";
import Link from "./Link";

const Header = () => {
  return (
    <div className="flex bg-yellow-400 uppercase font-bold">
      <Link href="/" className="p-3 text-xl font-bold text-black">Marmaduke Dando</Link>
    </div >
  )
}
export default Header;