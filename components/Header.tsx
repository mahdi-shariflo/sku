import { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ setOpen }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeSearchMenu = (e: any) => {
      if (e.path[0].tagName === "DIV") {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeSearchMenu);
    return document.body.removeEventListener(
      "click",
      closeSearchMenu
    );
  }, []);
  return (
    <header className="flex w-[95%] mx-auto justify-between items-center pt-5 border-b border-[#D8E4F2] pb-10">
      <div className="flex gap-2 flex-1">
        <div
          onClick={() => setShowMenu(true)}
          className="flex-1 flex relative items-center bg-white h-11 rounded-xl border-2 border-[#D8E4F2] px-2"
        >
          <BsSearch className="text-black" />
          <input className="bg-transparent w-full outline-none px-2" />
          <div
            className={`w-full z-50  bg-white absolute shadow-sm h-[300px] top-12 left-0 overflow-auto rounded-xl font-reqularRobot text-black px-3 pt-2 text-[14px] transition-all duration-150 ${
              showMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>tststststststststst</div>
          </div>
        </div>
        <div
          onClick={() => setOpen(true)}
          className="bg-blue-500 cursor-pointer text-white h-10 w-10 flex justify-center items-center rounded-xl"
        >
          <MdOutlineFilterList size={27} />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-12 h-12 cursor-pointer rounded-full text-white bg-blue-500 flex justify-center items-center">
          <AiOutlineCloudUpload size={25} />
        </div>
      </div>
    </header>
  );
};

export default Header;
