export const Button = function({disabled}){
    return(
        <>
        <div>
            <button className={`${!disabled?"bg-green-500":"bg-gray-500"} rounded-2xl w-20`}>Submit</button>
        </div>
        </>
    )
}