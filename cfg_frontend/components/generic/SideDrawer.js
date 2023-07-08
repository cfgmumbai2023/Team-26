const SideDrawer=(props)=>{
    return(
        <>
         <div className="absolute bg-black opacity-60 left-0 top-0 z-10 w-full h-full " onClick={props.onClose}></div>
          <div className="absolute z-50 bg-slate-50 h-full w-[40%] top-0 right-0">
            <div className="justify-between flex py-2 px-6">
                <span className="text-lg ">{props.title}</span>
                <span onClick={props.onClose} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                </span>
            </div>
            {props.children}

          </div>
        </>
    )
}
export default SideDrawer;