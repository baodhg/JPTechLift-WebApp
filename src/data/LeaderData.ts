// src/data/leaders.ts
import ThomasEaton from "../assets/images/leaders/ThomasEaton.png";
import VuNgocMinhTuyet from "../../src/assets/images/leaders/VuNgocMinhTuyet.png";

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
      "Cố vấn công nghệ tại Anh quốc.",
  },
  {
    name: "Vũ Ngọc Minh Tuyết",
    title: "President JP TechLift UK",
    image: VuNgocMinhTuyet,
    description:
      "Định hình tương lai ngành thang máy tại Anh bằng cách tích hợp công nghệ hiện đại vào thiết kế và vận hành.",
  },
];
