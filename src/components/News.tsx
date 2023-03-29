import Link, { ILink } from "./Link";

const News = ({ title, description, link }: { title: string, description: string, link: ILink }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col px-4" >
      <div className="max-w-2xl text-white" >
        {title && <h2 className="text-4xl uppercase">{title}</h2>}
        {description && <div className="text-2xl my-6">{description}</div>}
        {link && <Link className="btn-yellow text-lg" {...link}>{link.children}</Link>}
      </div>
    </div>

  )
}
export default News;