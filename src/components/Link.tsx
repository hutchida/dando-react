export interface ILink {
  className?: string, href?: string, target?: "_self" | "_blank", onClick?: () => void, children: string
}

const Link = ({ className, href, target = "_self", onClick, children }: ILink) => {
  return <a href={href} target={target} className={className} onClick={onClick}>{children}</a>
}
export default Link;