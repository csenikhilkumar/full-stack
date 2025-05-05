import { useEffect, useState } from "react";
import { SidebarTogle } from "./icons/sidebardtoggle";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);
  
    return matches;
  };

export function SideBar2({ opensidebar, setOpensidebar }) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    console.error(isDesktop)
    
    useEffect(() => {
      if (isDesktop == false) {
        setOpensidebar(false)
      } else {
        setOpensidebar(true)
      }
    }, [isDesktop])

    
    if(!opensidebar){
        return<>
        <div className="fixed top-0 left-0">
            <div className=" bg-gray-600 cursor-pointer hover:bg-slate-400 " onClick={()=>{setOpensidebar(!opensidebar)}}>
                <SidebarTogle></SidebarTogle>
            </div>
            </div></>
    }
  
      
        return<div className="w-96 h-screen bg-red-400 fixed top-0 left-0 md:relative">
        <div>
          <div
            className=" cursor-pointer hover:bg-slate-400"
            onClick={() => {
              setOpensidebar(!opensidebar);
            }}
          >
            <SidebarTogle></SidebarTogle>
          </div>
        </div>
      </div>
      
    
}
