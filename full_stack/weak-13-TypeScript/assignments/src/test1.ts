interface usr {
     name :string;
}

interface admin {
    name :string
}
 
 type userOrAdmin = usr | admin 

function SayName (user:userOrAdmin):string{
    return "welcome user "+user.name
}


const user:usr = {
    name:"nikhil"
}
const  admin1 : admin ={
    name :"hitesh"
}

console.log(SayName(user))


