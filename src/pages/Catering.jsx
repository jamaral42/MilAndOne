import Image1 from "/catering/img1.jpg";
import Image2 from "/catering/img2.jpg";
import Image3 from "/catering/img3.jpg";
import Carousel from "../components/Carousel";

const carousel_items = [
  {
    id: 1,
    img: Image1,
    title: "Almoços/Jantares",
    description: "Algo sobre Almoços e Jantares",
  },
  {
    id: 2,
    img: Image2,
    title: "Coffee Breaks",
    description: "Algo sobre Coffee Breaks",
  },
  {
    id: 3,
    img: Image3,
    title: "Cocktails/Finger Food",
    description: "Algo sobre Cocktails e Finger Food",
  },
];

export default function Catering() {
  return (
    <div>
      <Carousel items={carousel_items} />
      <div className=""></div>
    </div>
  );
}
