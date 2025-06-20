"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center text-lg w-screen h-screen  ">
      <div>
        
        <div>
          <Link className="text-md border m-2 " href="/signIn">signIn</Link>
          <Link className="text-md border m-2 " href="/signUp">signUp</Link>

        </div>
        
      </div>
      
      
    </div>
  );
}
