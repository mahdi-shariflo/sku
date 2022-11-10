import React from 'react'
import { useRecoilValue } from 'recoil';
import { selectChat } from '../../atom/atom';
import CardPv from './CardPv';
interface props{
    users:any | []
}
const Users = ({users}:any) => {
  const selectChatValue = useRecoilValue(selectChat)
  return (
    <div className={`w-full md:min-w-[350px] md:max-w-[350px] bg-white h-screen overflow-auto scroll-style ${Object.keys(selectChatValue).length > 1 ? "hidden md:block" :""}`}>
    {users.map((user:any, index:any) => {
      return <CardPv key={index} user={user} />;
    })}
  </div>
  )
}

export default Users