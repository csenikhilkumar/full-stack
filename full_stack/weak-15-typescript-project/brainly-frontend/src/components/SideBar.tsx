import { Brain } from "../icons/brain";
import { TwitterIcon } from "../icons/twitter";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { SideItems } from "./sideBarIcon";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-600 "><Brain></Brain></div>
            Brainly
        </div>
        <div className="pt-8 pl-4">
            <SideItems text="Twitter" icon={<TwitterIcon/>}></SideItems>
            <SideItems text="Youtube" icon={<YoutubeIcon/>}></SideItems>
        </div>
    </div>
}