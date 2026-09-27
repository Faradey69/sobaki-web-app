import Image from "next/image";

const menuItems = [
  { label: "Щенки", href: "#puppies" },
  { label: "О клубе", href: "#about" },
  { label: "Блог", href: "#blog" },
  { label: "Предложить щенка", href: "#offer" },
];

export default function Header() {
  return (
    <header className="h-[140px] w-full bg-bg text-text">
      <div className="mx-auto flex h-full w-[1340px] items-center">
        <a href="#top" aria-label="Siam Pet Club" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Siam Pet Club"
            width={65}
            height={120}
            priority
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
          href="tel:+79823324487"
          className="ml-auto whitespace-nowrap font-bebas text-[20px] leading-[120%] tracking-[0.01em]"
        >
          +7 (982) 332-44-87
        </a>
      </div>
    </header>
  );
}
