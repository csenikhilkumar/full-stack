import axios from "axios";

// export default async function DynamicParams({ params }: any) {
//   const postId = await (params).postsId;
//   //this is called dynamic route and slug
//   const Respone = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   const data = Respone.data;
//   return (
//     <div>
//       id is :{data.id}
//       <br />
//       title : {data.title}
//       <br />
//       bosy: {data.body}
//     </div>
//   );
// }

// what is the strc of group routing ?
// ans (parentfolder)->child1folder and child2 folder

// group routing means when i store a folder in parent folder the parant folder can feel free to ignore in the routes this the advantage of group routing


export default async function Catch_all_segment({params}:any){
  const postId = (await params).postsId;
  //this is called dynamic route and slug
//   const Respone = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   const data = Respone.data;
  return (
    <div>
        the params is {JSON.stringify(postId)}
      {/* id is :{data.id}
      <br />-
      title : {data.title}
      <br />
      bosy: {data.body} */}
    </div>
  );
}