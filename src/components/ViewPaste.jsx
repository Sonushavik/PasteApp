import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


const ViewPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("Final paste", paste)

  return (
    <div>
    <div className="flex flex-row gap-7">
      <input
        className="p-2 rounded-md text-white"
        type="text"
        placeholder="Enter title here"
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
        disabled
      />

      {/* <button 
      onClick={createPaste} 
      className="p-2 rounded-md text-white">
        {pasteId ? "Update Paste" : "Create My Paste"}
      </button> */}
    </div>

    <div>
      <textarea
        className="rounded-md mt-4 min-w-[500px] p-4"
        value={paste.content}
        placeholder="enter content here "
        onChange={(e) => setValue(e.target.value)}
        rows={20}
        disabled
      />
    </div>
  </div>
  )
}

export default ViewPaste
