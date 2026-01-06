import Image from "next/image";

export default function Header(): JSX.Element {
  const logo = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeLogo = encodeURI(logo);

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" aria-label="Home" className="block">
            <Image src={safeLogo} alt="Garber Bros logo" unoptimized width={160} height={60} />
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-4 items-center text-sm">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/about">About Us</a></li>
            <li><a className="nav-link" href="/lock-status">Lock Status</a></li>
            <li><a className="nav-link" href="/vessels">Vessels</a></li>
            <li><a className="nav-link" href="/barges">Barges</a></li>
            <li><a className="nav-link" href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
            <li><a className="nav-link" href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <nav>
            <ul className="flex gap-3 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/vessels">Vessels</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
