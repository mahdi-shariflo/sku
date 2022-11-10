import { useCallback, useState } from "react";
import Test from "./../../assest/image/test.jpg";
import Test2 from "./../../assest/image/test2.jpg";
import Menu from "../../components/chat/Menu";
import Users from "../../components/chat/Users";
import Convertion from "../../components/chat/Convertion";
import Navigation from "../../components/layoutPublic/Navigation";

const Chat = () => {
  const users = [
    {
      profile: Test,
      fullname: "مهدی شریفلو",
      lastMessage: "سلام خوبی",
      lastseen: "12:08",
      unreadMessages: 0,
      isOnline: true,
    },
    {
      profile: Test2,
      fullname: "علی شریفلو",
      lastMessage: "کجایی",
      lastseen: "13:01",
      unreadMessages: 4,
      isOnline: false,
    },
  ];


  return (
   
    <div className="flex bg-[#F5F7FB] h-[100vh]">
    <Menu />
    <Users users={users}/>
    <Convertion/>
  </div>
 
  );
};

export default Chat;
