import { FaPlus } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

function App() {
  return (
    <div className="overflow-y-scroll font-sans lg:h-dvh">
      <div class="relative mx-auto my-0 bg-slate-100">
        <div className="px-0 py-8 md:py-10 lg:py-12">
          <header className="text-center text-lg font-semibold text-blue-500 md:text-3xl md:font-bold lg:text-5xl lg:font-bold">
            facebook
          </header>
          <form className="m-auto w-[180px] rounded bg-white px-1 py-1 shadow-lg shadow-gray-500/30 md:mt-2 md:w-[320px] md:px-3 md:py-4 lg:w-[400px]">
            <div className="py-1">
              <p className="text-center text-[8px] md:mb-2 md:text-[14px] lg:text-[20px]">
                Log in to Facebook
              </p>
            </div>

            <div className="mb-[2px] md:mb-2 lg:mb-4">
              <input
                type="email"
                placeholder="Email address or phone number"
                className="md:text-md w-full rounded border border-stone-100 px-3 py-1 text-[8px] font-thin tracking-wide focus:outline-none md:rounded-md md:border-2 md:border-stone-100 md:py-[12px] lg:px-3 lg:py-5 lg:text-[18px] lg:placeholder:text-[16px]"
              />
            </div>

            <div className="mb-[1px] md:mb-2 lg:mb-4">
              <input
                type="password"
                placeholder="Password"
                className="md:text-md w-full rounded border border-stone-100 px-3 py-1 text-[8px] font-thin tracking-wide focus:outline-none md:rounded-md md:border-2 md:border-stone-100 md:py-[12px] lg:px-3 lg:py-5 lg:text-[18px] lg:placeholder:text-[16px]"
              />
            </div>

            <div className="mb-1 md:mb-3">
              <button className="bg-b w-full rounded bg-blue-500 px-3 py-1 text-[8px] font-bold tracking-wide text-white hover:bg-blue-600 md:rounded md:border md:border-blue-500 md:py-[8px] md:text-[16px] md:font-semibold lg:py-3 lg:text-xl">
                Log in
              </button>
            </div>

            <div className="mb-1">
              <p className="text-center text-[7px] text-blue-500 hover:underline md:text-[11px] md:font-thin lg:text-[13px]">
                Forgotten account?
              </p>
            </div>

            <div className="flex flex-row items-center justify-between md:mb-3">
              <span className="h-[1px] w-full bg-stone-300"></span>
              <span className="mx-3 text-[7px] text-stone-400 md:text-[10px] lg:text-[12px]">
                or
              </span>
              <span className="h-[1px] w-full bg-stone-300"></span>
            </div>

            <div className="my-1 flex items-center justify-center">
              <button className="inline-block rounded bg-green-600 px-3 py-2 text-center text-[8px] font-semibold tracking-wide text-white hover:bg-green-600 md:rounded md:px-4 md:py-2 md:text-xs lg:rounded-md lg:py-4 lg:text-[16px]">
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-[6px] text-stone-500 md:mt-12 md:text-[9px] lg:mt-16 lg:w-auto lg:text-[12px]">
        <div className="pt-6 lg:flex lg:items-center lg:justify-center lg:px-60">
          <div className="mx-5 my-0 md:mx-8 lg:mx-[40px]">
            <ul className="flex flex-wrap items-center md:mb-2">
              <li className="p-0">English (UK)</li>
              <li className="pl-1 md:pl-3">
                <a href="hausa">Hausa</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="rançais">Français (France)</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="Português">Português (Brasil)</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="Español">Español</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="arabic">العربية</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="indonesia">Bahasa Indonesia</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="deutsch">Deutsch</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="japanese">日本語</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="italiano">Italiano</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="hindu">हिन्दी</a>
              </li>
              <li className="pl-1 md:pl-3">
                <a href="*">
                  <FaPlus className="lg: h-3 w-3 border bg-stone-100 text-[10px] font-thin text-stone-700 md:h-4 md:w-6 md:px-[2px] md:py-[2px] lg:h-6 lg:w-9 lg:px-1 lg:py-1" />
                </a>
              </li>
            </ul>

            <div className="h-[1px] w-full bg-stone-200 md:mb-1"></div>

            <div className="mt-[3px]">
              <ul className="-ml-2 flex flex-wrap items-center p-0 capitalize md:-ml-4 md:leading-[15px] lg:leading-5">
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">sign up</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">login</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">messenger</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">facebook lite</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">video</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">places</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">games</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">marketplace</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">meta pay</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">meta store</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">meta quest</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">meta AI</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">instagram</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">threads</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">fundraisers</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">services</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">voting information centre</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">privacy policy</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">privacy centre</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">groups</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">about</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">create ad</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">create page</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">developers</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">careers</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">cookies</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">AdChoices</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">terms</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">help</a>
                </li>
                <li className="pl-[12px pl-[15px] lg:pl-[20px]">
                  <a href="sign-up">contact uploading and non-users</a>
                </li>
              </ul>
            </div>

            <div className="mt-2 md:mt-6">
              <div>
                <span className="flex flex-row flex-wrap items-center">
                  Meta
                  <span className="px-1">
                    <FaRegCopyright />
                  </span>
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
