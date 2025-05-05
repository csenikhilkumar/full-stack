export function SideBar1() {
  return (
    <>
      <div className="flex h-screen ">
        <div className=" bg-red-200 ease-in-out h-screen  transform-all  duration-150 w-0 md:w-96">sidebar</div>
        <div className="bg-green-300 w-full h-300">content</div>
      </div>
    </>
  );
}
