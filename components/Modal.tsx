import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { MdOutlineClose } from "react-icons/md";
import IconButton from "@mui/material/IconButton";

interface props {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  maxWidth: any;
}
export default function Modal({
  children,
  open,
  setOpen,
  className,
  maxWidth,
}: props) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        className={className}
        maxWidth={maxWidth}
      >
        {/* <div
          onClick={handleClose}
          className="flex justify-end"
        >
          <IconButton className="!rounded-lg m-2">
            <MdOutlineClose size={18} />
            <p className="text-xs">بستن</p>
          </IconButton>
        </div> */}
        {children}
      </Dialog>
    </div>
  );
}