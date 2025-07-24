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
      "Cố vấn công nghệ tại Anh Quốc.",
  },
  {
    name: "Minh Tuyết",
    title: "Co-Founder",
    image: VuNgocMinhTuyet,
    description:
      "Quản trị bộ máy và phát triển thương hiệu.",
  },
];
