import Image from "next/image";

const SEED_DECK_URL =
  "https://www.canva.com/design/DAGCbH7Q9nw/cWEMoBESe1JUii0SxWhIRA/view?utm_content=DAGCbH7Q9nw&utm_campaign=designshare&utm_medium=link&utm_source=editor";

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
      <a href={SEED_DECK_URL} className="deck">
        seed deck
      </a>
    </main>
  );
}
