import { useEffect, forwardRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import Ad from "./../assest/image/test.jpg";
import Image from "next/image";
import Navigation from "../components/layoutPublic/Navigation";
const Transition = forwardRef(function Transition(
  props,
  ref
) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});
const Search = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (location.pathname === "/search") {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(!show);
  };

  const onChangeSearch = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };

  const location = useRouter();

  const wordSearch = [
    "کت جین",
    "کت و دامن",
    "سارافون",
    "شلوار",
    "شلوار جین",
  ];
  return (
    <Navigation>
      <Dialog
        open={show}
        //   @ts-ignore
        TransitionComponent={Transition}
        transitionDuration={800}
        keepMounted
        onClose={handleClose}
        fullScreen={true}
        maxWidth="lg"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="m-2">
          <div className="flex bg-[#F0F0F1] flex-1 py-[0.70rem] relative rounded-lg px-2">
            <BsSearch className="text-gray-600 w-5 h-5" />
            <input
              value={search}
              onChange={onChangeSearch}
              className="yekanBold w-full text-sm bg-transparent px-2 outline-none placeholder:text-xs txet-[#222f3e]"
              type="text"
              placeholder="کالا، یا جنس خود را جستجو کنید..."
            />
            <div className="w-full h-fit absolute right-0 top-12 z-50 bg-white shadow-xl">
              {wordSearch
                .filter((word: any) => {
                  return search === ""
                    ? ""
                    : word.includes(search);
                })
                .map((word: any) => {
                  return (
                    <p className="p-2 text-sm text-gray-800 active:bg-gray-100">
                      {word}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="container_ad2 relative w-full h-40 md:h-60 mt-3   rounded-lg md:rounded-xl overflow-hidden cursor-pointer">
            <Image
              src={Ad}
              className="object-cover "
              layout="fill"
            />
          </div>
        </div>
      </Dialog>
    </Navigation>
  );
};

export default Search;
