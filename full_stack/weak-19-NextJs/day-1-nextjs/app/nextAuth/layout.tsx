import NavBar from "../components/NavBar";

export default function  RootLayout({children}){
    return<>
    <div> <NavBar text={"quizio"}></NavBar></div>
    {children}
    </>
}