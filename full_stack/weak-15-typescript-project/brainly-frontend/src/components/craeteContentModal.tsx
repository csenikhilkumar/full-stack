import axios from "axios";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./Button";
import { Input } from "./input";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    "Twitter" = "twitter"
}

interface CreateContentModalProps {
    open: boolean; // State to determine if the modal is open
    onClose: () => void; // Function to close the modal
}
export function CreateContentModal({open, onClose}:CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState(ContentType.Youtube)
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function CreateContent() {
        if (isSubmitting) return; // Prevent multiple submissions
        
        setIsSubmitting(true);
        
        try {
            const title = titleRef.current?.value
            const link = linkRef.current?.value
            
            if (!title || !link) {
                alert("Please fill in all fields");
                return;
            }
            
            const response = await axios.post(`${BACKEND_URL}/user/v1/data`, {
                link,
                type,
                title,
            }, {
                headers: {
                    "token": localStorage.getItem("token")
                }
          
            })
        
            
            onClose(); // Close modal on success
            
        } catch (error: any) {
            console.error("Error creating content:", error);
            alert(error.response?.data?.message || "Failed to create content");
        } finally {
            setIsSubmitting(false);
        }
    }

    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-5 rounded-md">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input ref={titleRef} placeholder={"title"}></Input>
                        <Input ref={linkRef} placeholder={"Link"}></Input>
                    </div>
                    <div>
                        <h1>type</h1>
                        <div className="flex gap-1">
                            <Button 
                                text="Youtube" 
                                variant={type === ContentType.Youtube ? "primary" : "secondary"} 
                                onClick={() => {
                                    setType(ContentType.Youtube)
                                }}
                            />
                            <Button 
                                text="Twitter" 
                                variant={type === ContentType.Twitter ? "primary" : "secondary"} 
                                onClick={() => {
                                    setType(ContentType.Twitter)
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button 
                            variant="primary" 
                            text={isSubmitting ? "Submitting..." : "Submit"} 
                            onClick={CreateContent}
                        />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}