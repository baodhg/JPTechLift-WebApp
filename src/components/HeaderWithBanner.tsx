import TopBar from "./Navbar/DesktopMenu/TopBar";
import MenuBar from "./Navbar/DesktopMenu/MenuBar";

interface HeaderWithBanner {
  banner: string;
  title: string;
}

export default function HeaderWithBanner({ banner, title }: HeaderWithBanner) {
  return (
    <header className="relative">
      {/* Banner */}
      <img src={banner} alt="JP TechLift banner"
           className="h-[530px] w-full object-cover " />
      <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />

      {/* NAVIGATION CARD */}
      <div className="absolute inset-x-0 top-0 z-40 flex justify-center">
        <div className="relative w-full overflow-visible bg-white shadow-xl pb-5">

          {/* ---- TOP-BAR trắng ---- */}
          <TopBar />          {/* padding-x đã có trong SCSS (24px) */}

          {/* ---- MENU-BAR xanh ---- */}
          <div className="absolute inset-x-11 top-full -translate-y-1/3 transform">
            {/*  inset-x-6  ⇒ 24 px = đúng lề Figma */}
            <MenuBar scrolled={false}
                     className="rounded-lg bg-[#012452] px-8 py-4 shadow-md" />
          </div>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center
                     px-4 mt-12 pt-10 text-center text-3xl font-extrabold uppercase tracking-wide text-white
                     md:text-5xl">
        {title}             
      </h1>
    </header>
  );
}