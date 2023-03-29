import Link, { ILink } from "./Link";

const Video = ({ youtube }: { youtube: string }) => {
  return (
    <div className="h-screen w-screen" >
      <iframe src={`https://www.youtube.com/embed/${youtube}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div >

  )
}
export default Video;