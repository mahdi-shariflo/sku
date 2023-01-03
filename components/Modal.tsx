import * as React from "react";
import Dialog from "@mui/material/Dialog";

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
        PaperProps={{
          sx:{
            height:"540px",
           
          }
        }}
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
