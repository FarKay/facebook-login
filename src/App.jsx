function App() {
  return (
    <div className="font-sans">
      <header className="mt-5 text-center text-xl font-bold text-blue-500 sm:mt-8 sm:text-2xl sm:font-extrabold md:mt-16 md:text-4xl md:font-extrabold">
        facebook
      </header>

      <main class="mt-3 flex h-auto items-center justify-center sm:mt-2 md:mt-5">
        <form className="m-auto w-[200px] rounded-lg bg-white p-2 shadow-lg shadow-gray-500/30 sm:w-[275px] sm:px-3 sm:py-1 md:w-96">
          <div className="mb-3 sm:px-1 sm:py-2 md:px-3 md:py-4">
            <p className="text-center text-[8px] sm:text-[12px] md:text-[18px] md:font-medium">
              Log in to Facebook
            </p>
          </div>
          <div className="mb-1">
            <input
              type="email"
              placeholder="Email address or phone number"
              className="inline-block w-full rounded border border-slate-300 px-3 py-2 text-[8px] tracking-wide placeholder:text-slate-400 sm:rounded sm:px-4 sm:py-2 sm:text-[12px] md:px-4 md:py-3 md:text-base"
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              placeholder="Password"
              className="roundedborder inline-block w-full border border-slate-300 px-3 py-2 text-[8px] tracking-wide placeholder:text-slate-400 sm:rounded sm:px-4 sm:py-2 sm:text-[12px] md:px-4 md:py-3 md:text-base"
            />
          </div>

          <div className="mb-1">
            <button className="bg-b w-full rounded bg-blue-500 px-3 py-1 text-[8px] font-bold tracking-wide text-white hover:bg-blue-600 sm:rounded sm:px-4 sm:py-2 sm:text-[14px] md:px-4 md:py-3 md:text-base">
              Log in
            </button>
          </div>

          <div className="mb-1 sm:mb-1">
            <p className="text-center text-[7px] text-blue-500 hover:underline sm:text-[9px] md:text-sm">
              Forgotten account?
            </p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <span className="h-[1px] w-full bg-stone-300"></span>
            <span className="mx-3 text-[7px] text-stone-400 sm:text-[7px] md:text-sm">
              or
            </span>
            <span className="h-[1px] w-full bg-stone-300"></span>
          </div>

          <div className="my-1 flex items-center justify-center">
            <button className="inline-block rounded bg-green-600 px-3 py-2 text-center text-[8px] font-semibold tracking-wide text-white hover:bg-green-700 sm:rounded sm:px-4 sm:py-2 sm:text-xs md:px-4 md:py-3 md:text-base md:font-semibold">
              Create new account
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
