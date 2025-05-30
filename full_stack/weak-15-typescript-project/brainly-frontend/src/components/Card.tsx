import { ShareIcon } from "../icons/shareIcon";
interface cardProps  {
    title:string;
    link:string;
    type:"twitter" | "youtube"
}

export function Card ({title,link,type}:cardProps ){
    return <div><div className="bg-white rounded-md shadow-md outline-gray-100 max-w-72 p-8 border">
        <div className="justify-between flex">
            <div className="flex items-center text-sm">
                <div className="text-gray-500 pr-2">
                <a href={link} target="_blank"><ShareIcon/></a>
                </div>
                {title}
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500"><ShareIcon></ShareIcon></div>
                
                <div className="pr-2 text-gray-500"><ShareIcon></ShareIcon></div>
            </div>
        </div>
        <div className="pt-8 ">
            {type == "youtube" &&  <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
       

        {type == "twitter" && <blockquote className="twitter-tweet">
            <a href={link.replace("x.com","twitter.com")}></a>
        </blockquote>}
        </div>
    </div></div>
}