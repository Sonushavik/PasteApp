import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState(" ");
  const [value, setValue] = useState(" ");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    console.log("Inside use effect");
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId);
      console.log("Page found")
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId])

  function createPaste(){
    const paste ={
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }


    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }
    else{
      //create
      dispatch( addToPastes(paste));
    }
    // after creation or updation
    setTitle(' ');
    setValue(' ');
    setSearchParams({});
  }



  return (
    <div>
      <div className="flex flex-row gap-7">
        <input
          className="p-2 rounded-md text-white"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button 
        onClick={createPaste} 
        className="p-2 rounded-md text-white">
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div>
        <textarea
          className="rounded-md mt-4 min-w-[500px] p-4"
          value={value}
          placeholder="enter content here "
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;