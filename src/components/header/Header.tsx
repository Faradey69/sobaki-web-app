import Image from "next/image";

const menuItems = [
  { label: "Шарпей", href: "#sharpei" },
  { label: "Сиба-ину", href: "#shiba" },
  { label: "Корги", href: "#corgi" },
  { label: "Померанский шпиц", href: "#pomeranian" },
];

export default function Header() {
  return (
    <header className="h-[140px] w-full bg-bg text-text">
      <div className="mx-auto flex h-full w-[1340px] items-center">
        <a href="#top" aria-label="Shar Pei Club" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Shar Pei Club"
            width={65}
            height={120}
            priority
            unoptimized
            className="block h-[120px] w-[65px] object-contain"
          />
        </a>

        <nav
          aria-label="Основная навигация"
          className="ml-[72px] flex items-center gap-[44px] whitespace-nowrap font-raleway text-[16px] leading-[120%]"
        >
          {menuItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+79262324307"
          className="ml-auto whitespace-nowrap font-bebas text-[30px] leading-[120%] text-text"
        >
          +7 (926) 232-43-07
        </a>
      </div>
    </header>
  );
}
