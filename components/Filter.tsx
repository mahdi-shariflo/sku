import { useState } from "react";
import Modal from "./Modal";
import Select from "react-select";
import { FcFilledFilter } from "react-icons/fc";
import { MdOutlineFilterList } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

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
    <Modal open={open} setOpen={setOpen} maxWidth="md">
      <div className="flex items-center justify-center py-10 gap-5">
        <h1 className="text-center font-sansBlack text-lg  text-black">
          سرچ بر اساس نام استاد، تاریخ، رشته
        </h1>
        <div className="bg-blue-500 cursor-pointer text-white h-8 w-8 flex justify-center items-center rounded-lg">
          <MdOutlineFilterList size={27} />
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-10 justify-items-center mt-10">
        <div className="flex items-center font-sansMedium text-xs gap-2">
          <label>نام استاد :</label>
          <Select
            placeholder="نام استاد"
            className="min-w-[300px]"
            options={options}
          />
        </div>
        <div className="flex items-center font-sansMedium text-xs gap-2">
          <label>تاریخ :</label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={handleChange}
            className="min-w-[300px] !py-3"
          />
        </div>

        <div className="flex items-center font-sansMedium text-xs gap-2">
          <label className="">نام رشته :</label>
          <Select
            placeholder="نام رشته"
            className="min-w-[300px]"
            options={options}
          />
        </div>
      </div>
    </Modal>
  );
};
