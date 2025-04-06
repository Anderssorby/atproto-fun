import Status from "#/components/status";
import Image from "next/image";

export default function Home() {
  let profile = {};
  let status = [];

  return (
    <div className="gri+d grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Atmosphere events</h1>
        <Status profile={profile} status="" />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3">
        Footer
      </footer>
    </div>
  );
}
