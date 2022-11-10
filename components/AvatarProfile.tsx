import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { MuiRtl } from "../utils/Mui";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
export default function AvatarProfile() {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const { data: session } = useSession();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutUser = async () => {
    await Router.push("/auth/signin");
    signOut();
  };
  return (
    <MuiRtl>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="تنظیمات کاربری">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={
              open ? "account-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
{/*          
              <Avatar
                //   @ts-ignore
                src={session?.user?.image}
                sx={{ width: 42, height: 42 }}
              /> */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter:
              "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem
          className="!text-xs"
          sx={{ fontFamily: "sansBold" }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <p>پروفایل</p>
        </MenuItem>
        <Divider />

        <MenuItem
          onClick={logoutUser}
          className="!text-xs"
          sx={{ fontFamily: "sansBold" }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          خروج
        </MenuItem>
      </Menu>
    </MuiRtl>
  );
}
