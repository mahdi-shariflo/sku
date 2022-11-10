import CardMessage from "./CardMessage";
import UserInfoConvertion from "./UserInfoConvertion";
import InputConvertion from "./InputConvertion";
import { useChatScroll } from "../../hook/useChatScroll";
const Convertion = () => {
  const arr = [
    0,
    1,
    ,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
  ];
  const elementRef = useChatScroll(arr);
  return (
    <div
      className={`flex flex-1 flex-col  justify-between relative !bg-white md:m-3 rounded-lg !overflow-hidden`}
    >
      <UserInfoConvertion />
      <div ref={elementRef}  className="overflow-auto scroll-style  pb-8">
        {arr.map((item, i) => {
          return (
            <CardMessage
              key={i}
              message=" وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو
        آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال
        می‌ کنند که می‌توانند در خارج از وطن خود زندگی
        نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌
        فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی
        خرابه‌ های وطن خودش می‌باشد و بس!"
              me={true}
            />
          );
        })}
        
      </div>
      <InputConvertion />
    </div>
  );
};

export default Convertion;
