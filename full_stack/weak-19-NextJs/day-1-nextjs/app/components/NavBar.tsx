interface text {
    text:string
}

export default function NavBar({text}:text){
    return(
        <div className="border-b p-2">{text}</div>
    )
}