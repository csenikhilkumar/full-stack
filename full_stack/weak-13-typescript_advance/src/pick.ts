type USER = {
    name:string,
    class:string
    email:string
    collage:string
}

type newUser = Pick<USER,"name"|"email">  // pick is nothing but that is use for creating new type using privious type , that is through chooses types like email name 

const newUser1:newUser = {
    name:'nikhil',
    email:"email@gmail.com"
   
}
