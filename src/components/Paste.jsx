import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { TiEye } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { IoIosCopy } from "react-icons/io";
import { MdScreenShare } from "react-icons/md";

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  console.log(pastes);

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title, // Browser may or may not use this
          text: `📝 Note Title: ${paste.title}\n\n📄 Content:\n${paste.content}`, // Combine title and content
          // url: window.location.href, // Optional: Share the current page URL
        })
        .then(() => {
          toast.success("Note shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      toast.error("Sharing is not supported in this browser.");
    }
  }

  // console.log(filteredData)

  return (
    <div className="mt-3">
      <input
        className="p-2 rounded-2xl min-w-[600px] w-[100%] bg-blue-200 border-2 border-blue-950"
        type="search"
        placeholder="Search  your notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="bg-blue-100 mt-4 border border-blue-950">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border-b-2 border-blue-950 mb-2" key={paste?._id}>
                <div className="font-bold border-b-2 border-gray-950 py-2 bg-blue-00 flex gap-3">
                  <IoMdArrowDroprightCircle className="mt-[4px]" />
                  <div>{paste.title}</div>
                </div>


                  <div className="flex flex-row justify-end gap-4 place-content-evenly mt-1 pr-1 ">
                    <button className="">
                      <a href={`/?pasteId=${paste?._id}`}>
                      <FaEdit />
                      </a>
                    </button>
                    <button>
                      <a href={`/pastes/${paste?._id}`}>
                        <TiEye />
                      </a>
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                      <AiFillDelete />
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to clipboard");
                      }}
                    >
                      <IoIosCopy />
                    </button>
                    <button onClick={() => handleShare(paste)}>
                      <MdScreenShare />
                    </button>
                  </div>
                  <div className="text-justify p-3 h-[80px] overflow-auto scrollbar-custom">{paste.content}</div>
                
                <div className="text-right pr-2 font-thin text-[5px]">
                  {paste.createdAt}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
