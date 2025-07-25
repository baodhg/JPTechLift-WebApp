import NavBar from "../Navbar/Navbar";

interface HeaderWithBanner {
  banner: string;
  title: string;
}

export default function HeaderWithBanner({ banner, title }: HeaderWithBanner) {
  return (
    <header className="relative">
      {/* NAVBAR nằm ngoài phần banner bị tối */}
      <NavBar />

      {/* Banner container */}
      <div className="relative">
        {/* Ảnh nền */}
        <img src={banner} alt="JP TechLift banner" className="h-[530px] w-full object-cover" />

        {/* Lớp overlay đen chỉ phủ ảnh */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Tiêu đề hiển thị trên ảnh */}
        <h1
          className="font-inter absolute inset-0 z-30 flex items-center justify-center 
             px-4 text-center text-3xl font-extrabold uppercase tracking-wide text-white 
             md:text-5xl -mt-12"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
        >
          {title}
        </h1>
      </div>
    </header>
  );
}
