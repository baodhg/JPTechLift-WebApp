// src/data/leaders.ts
import bao from "../assets/images/leaders/bao.jpg";
import danh from "../assets/images/leaders/danh.jpg";
import an from "../assets/images/leaders/an.jpg";
import kiet from "../assets/images/leaders/kiet.jpg";

export interface Leader {
  name: string;
  title: string;
  image: string;
  description?: string;
}

export const leaders: Leader[] = [
  {
    name: "Đỗ Hoàng Gia Bảo",
    title: "Fullstack Developer",
    image: bao,
    description: "Lập trình viên backend/frontend, yêu thích React và NestJS.",
  },
  {
    name: "Nguyễn Thành Danh",
    title: "Fullstack Developer",
    image: danh,
    description: "Kinh nghiệm NodeJS, NextJS và kiến trúc microservices.",
  },
  {
    name: "Nguyễn Hoàng An",
    title: "Fullstack Developer",
    image: an,
    description: "Chuyên làm UI/UX, tích hợp backend bằng ASP.NET Core.",
  },
  {
    name: "Trần Anh Kiệt",
    title: "Fullstack Developer",
    image: kiet,
    description: "Yêu thích TypeScript, Docker và CI/CD pipelines.",
  },
    {
    name: "Đỗ Hoàng Gia Bảo",
    title: "Fullstack Developer",
    image: bao,
    description: "Lập trình viên backend/frontend, yêu thích React và NestJS.",
  },
  {
    name: "Nguyễn Thành Danh",
    title: "Fullstack Developer",
    image: danh,
    description: "Kinh nghiệm NodeJS, NextJS và kiến trúc microservices.",
  },
  {
    name: "Nguyễn Hoàng An",
    title: "Fullstack Developer",
    image: an,
    description: "Chuyên làm UI/UX, tích hợp backend bằng ASP.NET Core.",
  },
  {
    name: "Trần Anh Kiệt",
    title: "Fullstack Developer",
    image: kiet,
    description: "Yêu thích TypeScript, Docker và CI/CD pipelines.",
  },
];
