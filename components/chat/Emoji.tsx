import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import dynamic from 'next/dynamic';
import { BsFillEmojiSmileFill } from "react-icons/bs";
const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);


interface props{
  onEmojiClick:any
}
export default function Emoji({onEmojiClick}: props) {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "emoji-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <BsFillEmojiSmileFill />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="emoji-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,

          sx: {
            overflow: "visible",
            marginTop: -8,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
            },
          },
        }}
      >
        <Picker onEmojiClick={onEmojiClick} />
      </Menu>
    </React.Fragment>
  );
}
