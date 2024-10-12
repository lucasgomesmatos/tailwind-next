export default function Home() {
  return (
    <div className="flex max-w-2xl flex-col gap-6 p-8">
      <div className="max-w-[900px]">
        <h1 className="flex items-center gap-2 text-2xl font-bold before:flex before:size-3 before:rounded-full before:bg-yellow-300 md:text-5xl">
          Hello tailwind
        </h1>

        <button className="w-24 rounded bg-zinc-950 px-4 py-2 hover:bg-zinc-950/80">
          Sign in
        </button>
      </div>
    </div>
  )
}
