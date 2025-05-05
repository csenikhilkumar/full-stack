export function MainComponent(){
    return(<>
    <div className="w-full">
    <div className="bg-black h-72 hidden md:block" ></div>
    <div className=" p-5  grid grid-cols-11 gap-8">
        <div className=" shadow-xl md:col-span-2 bg-slate-600 rounded-2xl h-96 -translate-y-24 col-span-11 hidden md:block"></div>
        <div className=" shadow-xl md:col-span-6 bg-yellow-600 rounded-2xl h-96 col-span-11"></div>
        <div className=" shadow-xl md:col-span-3 bg-green-600 rounded-2xl h-96 col-span-11"></div>

    </div>
    </div>
    
    </>)
}