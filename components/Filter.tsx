import { useState } from "react";
import Modal from "./Modal";
import Select from "react-select";
import { FcFilledFilter } from "react-icons/fc";
import { MdOutlineFilterList } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css"

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const Filter = ({ open, setOpen }: Props) => {
  const [value, setValue] = useState(null);
  function handleChange(value: any) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    setValue(value);
  }
  return (
    <Modal open={open} setOpen={setOpen} maxWidth="xs">
      <div className="flex items-center justify-center py-10 gap-5">
        <h1 className="text-center font-sansBlack text-lg  text-black">
          سرچ بر اساس نام استاد، تاریخ، رشته
        </h1>
        <div className="bg-blue-500 cursor-pointer text-white h-8 w-8 flex justify-center items-center rounded-lg">
          <MdOutlineFilterList size={27} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-6 mt-5">
      <div className="flex flex-col font-sansMedium text-xs gap-2">
          <p>تاریخ :</p>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={handleChange}
            className="w-full"
            // showOtherDays
            range
          />
        </div>
        <div className=" flex flex-col font-sansMedium text-xs gap-2">
          <p>نام استاد :</p>
          <Select
            placeholder="نام استاد"
            className="min-w-[300px]"
            options={options}
          />
        </div>
  

        <div className="flex flex-col font-sansMedium text-xs gap-2">
          <p className="">نام رشته :</p>
          <Select
            placeholder="نام رشته"
            className="min-w-[300px]"
            options={options}
          />
        </div>
       
      </div>
      <div className="flex justify-center mt-auto mb-10 items-center">
        <button className="bg-[#0096f5] py-3 text-xs text-white rounded-lg min-w-[300px]">جستجو</button>
        </div>
    </Modal>
  );
};
