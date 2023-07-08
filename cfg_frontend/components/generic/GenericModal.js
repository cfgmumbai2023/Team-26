const GenericModal = (props) => {
  return (
    <>
      <div className="absolute bg-black opacity-60 left-0 top-0 z-10 w-full h-[100vh] " onClick={props.onClose}></div>
      <div className={props.className ||"bg-white z-50 absolute top-[10%] left-[20%] w-[60%] h-[60%] rounded-md overflow-y-scroll"}>
     <div className="bg-purple-600 text-white font-medium py-3 px-4 text-xl flex justify-between items-center">
     <div className="">{props.title}</div>
     <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512" fill="#fff" onClick={props.onClose} className="cursor-pointer"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
     </div>
     {props.children}
     <div className="flex justify-end px-5 space-x-3 my-2 font-medium">
      <button type="submit" onClick={()=>props.pos()} className="px-8 py-1 bg-purple-700 text-white rounded-full">{props.posText}</button>
      <button onClick={()=>props.neg()} className="px-8 py-1 bg-purple-100 text-purple-700 rounded-full">{props.negText}</button>
     </div>
      </div>
    </>
  );
};
export default GenericModal;
