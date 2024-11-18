import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const ViewPaste = () => {

  const {id} = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.filter((paste) => paste._id === id)[0];
  console.log("Final paste", paste)

  return (
    <div className="bg-blue-100">
    <div className="flex flex-row gap-7">
      <input
        className="p-2 rounded-md  w-[100%] bg-blue-200 text-gray-700 font-bold border-2 border-blue-950 mt-3"
        type="text"
        placeholder="Enter title here"
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
        disabled
      />

    </div>

    <div>
      <textarea
        className="rounded-md mt-4 min-w-[500px] w-[100%] p-4 bg-blue-100 border border-blue-950 scrollbar-custom"
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