interface input{
    text:string,
    ref:string
    
}
export  function Input({text,ref}:input){
    return(<>
     
        <div className="bg-green-400 m-2 p-2 overflow-hidden rounded-md"><input className=" outline-none text-black" ref={ref}  type="text" placeholder={text} /></div>
    </>)
}   