export interface ILink {
  className?: string, href: string, target?: "_self" | "_blank", children: string
}

const Link = ({ className, href, target = "_self", children }: ILink) => {
  return <a href={href} target={target} className={className} >{children}</a>
}
export default Link;