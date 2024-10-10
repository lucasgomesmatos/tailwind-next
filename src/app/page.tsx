export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-6 dark:bg-zinc-950">
      <h1 className="flex gap-2 items-center font-bold  text-2xl md:text-5xl before:size-3 before:rounded-full before:bg-yellow-300 before:flex">
        Hello tailwind
      </h1>

      <button className="bg-zinc-950 px-4 py-2 rounded w-24 hover:bg-zinc-950/80">
        Sign in
      </button>
    </div>
  );
}
