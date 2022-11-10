import { useState } from "react";
import Slider from "react-slick";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import Test from "./../assest/image/logo.jpg";
import Test4 from "./../assest/image/test.jpg";
import Test3 from "./../assest/image/test2.jpg";
import Test1 from "./../assest/image/logo.png";
import CardStory from "../components/story/CardStory";
const stories = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [Test, Test1, Test3, Test4];

  const NextArrow = ({ onClick }: { onClick: any }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: { onClick: any }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack size={23} />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // autoplay: true,
    // rtl:true,
    autoplaySpeed: 2000,
    // @ts-ignore
    nextArrow: <NextArrow />,
    // @ts-ignore
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) =>
      setImageIndex(next),
      responsive: [
       
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#00000090]">
      {/* @ts-ignore */}
      <Slider
        className="max-w-[100vw]"
        {...settings}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={
              idx === imageIndex
                ? "slide activeSlide"
                : "slide"
            }
          >
            <CardStory src={img.src} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default stories;
