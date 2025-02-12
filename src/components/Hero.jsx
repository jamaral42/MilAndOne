import Image1 from "/feed/img1.jpg";
import Image2 from "/feed/img2.jpg";
import Image3 from "/feed/img4.jpg";
import Carousel from "./Carousel";

export default function Hero() {

  const carousel_items = [
    {
      id: 1,
      img: Image1,
      title: "1",
      description: "101",
    },
    {
      id: 2,
      img: Image2,
      title: "2",
      description: "202",
    },
    {
      id: 3,
      img: Image3,
      title: "3",
      description: "303",
    },
  ];

  return (
    <div className="">
      <Carousel items={carousel_items} />
      <div className=""></div>
    </div>
  );
}

