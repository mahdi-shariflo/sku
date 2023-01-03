import Image from "next/image";
import React from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { FiMoreVertical } from "react-icons/fi";
import {
  BsBookmarkDash,
  BsHeartFill,
} from "react-icons/bs";
import { FaComment } from "react-icons/fa";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const CardPost = () => {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  // @ts-ignore
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex items-center px-3 py-1 justify-between">
        {/* image profile and info */}
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              layout="fill"
              src="https://harfetaze.com/wp-content/uploads/2022/01/girly-picture-9-1.jpg"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p className="text-[12px]">پگاه نوروزی</p>
            <p className="font-sansLight text-xs">استاد</p>
          </div>
        </div>
        {/* more */}
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FiMoreVertical />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      {/* post */}
      <div className="relative w-full h-[280px]">
        <Image
          layout="fill"
          src="https://i1.delgarm.com/i/798/0011/04/61eec0ac1c792.jpeg"
        />
      </div>
      <div className="flex justify-between items-center p-2 py-3">
        <span className="flex items-center gap-8">
          <p className="flex items-center gap-2 text-[#A4B6E1]">
            <BsHeartFill size={23}/>
            <span>۱۹</span>
          </p>
          <p className="flex items-center gap-2 text-[#A4B6E1]">
            <FaComment size={23}/>
            <span>۱۲</span>
          </p>
        </span>
        <BsBookmarkDash size={21} className='text-[#A4B6E1]'/>
      </div>
    </div>
  );
};

export default CardPost;
