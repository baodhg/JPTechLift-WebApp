// src/data/leaders.ts
import ThomasEaton from "../assets/images/leaders/ThomasEaton.png";

export interface Leader {
  name: string;
  title: string;
  image: string;
  description?: string;
  highlights?: string[];
}

export const leaders: Leader[] = [
  {
    name: "Thomas Eaton",
    title: "President JP TechLift UK",
    image: ThomasEaton,
    description:
      "Định hình tương lai ngành thang máy tại Anh bằng cách tích hợp công nghệ hiện đại vào thiết kế và vận hành.",
  },
  {
    name: "Do Hoang Gia Bao",
    title: "President JP TechLift UK",
    image: ThomasEaton,
    description:
      "Định hình tương lai ngành thang máy tại Anh bằng cách tích hợp công nghệ hiện đại vào thiết kế và vận hành.",
  },
];
