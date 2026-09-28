import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-bg" aria-labelledby="hero-title">
      <div className="mx-auto grid w-[1340px] grid-cols-[600px_654px] gap-[86px] pb-[154px]">
        <div className="pt-[88px]">
          <h1
            id="hero-title"
            className="font-bebas text-[70px] leading-[120%] text-text"
          >
            СОБАКИ С ВЫСОКИМ
            <br />
            ШОУ-ПОТЕНЦИАЛОМ,
            <br />
            И ПРЕДАННЫЕ ДОМАШНИЕ
            <br />
            СПУТНИКИ
          </h1>

          <p className="mt-[16px] w-[570px] font-raleway text-[18px] leading-[140%] text-text">
            Питомцы Черный Чиж призваны стать звездами
            <br />
            как на выставочном ринге, так и в вашем сердце
          </p>

          <div className="mt-[56px] flex items-center gap-[16px]">
            <a
              href="#puppies"
              className="flex h-[80px] w-[280px] items-center justify-center rounded-[16px] bg-accent font-bebas text-[28px] leading-[120%] text-white transition-colors hover:bg-accent-hover"
            >
              ПОДОБРАТЬ СОБАКУ
            </a>

            <a
              href="#whatsapp"
              className="flex h-[80px] w-[180px] items-center justify-center rounded-[16px] border border-accent bg-transparent font-bebas text-[28px] leading-[120%] text-accent transition-colors hover:bg-accent hover:text-white"
            >
              WHATSAPP
            </a>
          </div>
        </div>

        <Image
          src="/images/hero-sharpei.png"
          alt="Шарпей с одуванчиками"
          width={654}
          height={690}
          priority
          unoptimized
          className="block h-[690px] w-[654px] rounded-[22px] object-cover"
        />
      </div>
    </section>
  );
}
