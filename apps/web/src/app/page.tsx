import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <Image
        className="logo"
        src="/gadfly.png"
        alt="Gadfly"
        width={109.2}
        height={128.8}
      />
      <h1>gadfly</h1>
      <h2>a system 2 compiler for language models</h2>
      <nav>
        <a href="https://github.com/killthebuddh4">github</a>
        <a href="https://twitter.com/killthebuddha_">twitter</a>
        <a href="https://discord.gg/Ad5szmQWhS">discord</a>
      </nav>
    </main>
  );
}
