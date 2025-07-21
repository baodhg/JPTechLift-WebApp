
import NavBar from "../Navbar/Navbar";

interface HeaderWithBanner {
  banner: string;
  title: string;
}

export default function HeaderWithBanner({ banner, title }: HeaderWithBanner) {
  return (
    <header className="relative">
      {/* Banner */}

      <div className=" inset-0 bg-black/35 mix-blend-multiply" />

      {/* NAVIGATION CARD */}
      <div>
        <NavBar />
        <img src={banner} alt="JP TechLift banner" className="h-[530px] w-full object-cover " />
      </div>

      {/* TITLE */}
      <h1
        className="font-inter pointer-events-none absolute inset-0 z-30 flex items-center justify-center
                     px-4 md:mt-16 md:pt-10 text-center text-3xl font-extrabold uppercase tracking-wide text-white
                     md:text-5xl"
      >
        {title}
      </h1>
    </header>
  );
}
