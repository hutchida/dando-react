import Link, { ILink } from "./Link";

const Header = ({ title, nav, onClick }: { title: string, nav: ILink[], onClick: Function }) => {
  return (
    <div className="flex fixed w-full z-10 bg-yellow-400 uppercase font-bold text-xs md:text-xl p-3 justify-between text-black">
      <div>
        <Link onClick={() => onClick("hero")}>{title}</Link>
      </div>
      <div className="flex gap-4">
        {nav?.map((item) => {
          return (
            <Link
              key={item.children}
              {...item}
              onClick={() => onClick(item.children)} />
          )
        })}
      </div>
    </div >
  )
}
export default Header;