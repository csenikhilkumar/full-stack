import { useEffect, useState } from "react";

import { Button } from "../components/Button";
import { PulsIcon } from "../icons/plusIcon";
import { ShareIcon } from "../icons/shareIcon";
import { Card } from "../components/Card";
import {CreateContentModal} from "../components/craeteContentModal"
import {SideBar} from "../components/SideBar"
import { useContent } from "../hooks/useContext";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh} = useContent()

useEffect(()=>{
refresh();
},[modalOpen])
  return (
    <>
      <div><SideBar></SideBar>
        
        <div className="border-2 p-4 ml-72 min-h-screen bg-gray-100">
        <div>
          <CreateContentModal open ={modalOpen} onClose={()=>{
            setModalOpen(false)
          }}></CreateContentModal>
        </div>
        <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          text="add content"
          startIcon={PulsIcon()}
          size="lg"
          onClick={()=>{setModalOpen(true)}}
        ></Button>
        <Button
          variant="secondary"
          text="share Brain"
          startIcon={ShareIcon()}
          size="sm"
          onClick={async ()=>{
           const response = await axios.post(`${BACKEND_URL}` + "/user/v1/Brain/share/",{
              share:true
            },{
              headers:{
             "token":localStorage.getItem("token")
            }})
           const shareUlr=`http://localhost:5173/${response.data.hash}`
           alert(shareUlr)
          }}
        ></Button>
        </div>
        <div className="flex gap-4 flex-wrap">
           <div className=" flex gap-4">
            {contents.map(({type,link,title})=><Card
              type={type}
              link={link}
              title={title}
            />)}

          </div>
        </div>
        </div>
      </div>
    </>
  );
}


