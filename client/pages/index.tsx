import Head from "next/head";

import Cards from "../modules/cards";
import ConnectWalletButton from "../modules/connect-wallet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Swash&family=Cookie&family=Oleo+Script+Swash+Caps:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="sm:flex min-h-screen font-cherrySwash">
        <aside className="flex-[30%] bg-gray-50 relative sm:border-r border-black py-4">
          <div className="w-11/12 mx-auto">
            <h1 className="font-oleo text-2xl">wave</h1>
            <ConnectWalletButton top />

            <p className="font-cookie mt-16 mb-4">
              Hey there{" "}
              <span role="img" aria-label="wave emoji" className="mr-2">
                👋!
              </span>
              I am Seyi.
            </p>
            <p>Say hello and send me a wave!</p>

            <form className="flex flex-col md:w-9/12 mt-8">
              <textarea
                className="border border-black px-4 py-2 text-cherrySwash mb-4 rounded"
                rows={5}
              ></textarea>
              <button className="py-1 px-2 bg-black rounded text-white">
                Send!
              </button>
            </form>
          </div>
          <footer className="absolute bottom-0 inset-x-0 text-xs py-1  justify-center hidden sm:flex">
            <span>Seyi 2021</span>
          </footer>
        </aside>
        <section className="flex-[70%] py-4">
          <div className="w-11/12 mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold mr-2">Total waves:</span>
                <span>0</span>
              </div>
              <ConnectWalletButton />
            </div>
          </div>

          <Cards />
        </section>
      </main>
    </>
  );
}
