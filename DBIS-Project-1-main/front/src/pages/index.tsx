import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Search from './search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Search/>
    // <main className="bg-gray-100 min-h-screen w-screen">
    //   <main className="max-w-screen-2xl m-auto bg-white">
    //     {/* NAVBAR */}
    //     <nav className="bg-white p-2 flex justify-between">
    //       <Link href="/" className="font-bold text-gray-700 text-2xl"> Railway booking </Link>
    //       <div>
    //         <div className="flex">
    //           <button
    //             className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
    //           >
    //             Sign in
    //           </button>
    //           <button className="border p-1 px-4 rounded">Sign up</button>
    //         </div>
    //       </div>
    //     </nav>
    //     {/* NAVBAR */}
    //     <main>
    //       {/* HEADER */}
    //       <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
    //         <div className="text-center mt-10">
    //           <h1 className="text-white text-5xl font-bold mb-2">
    //             Enter the PNR number
    //           </h1>
    //           {/* SEARCH BAR */}
    //           <div className="text-left text-lg py-3 m-auto flex justify-center">
    //             <input
    //               className="rounded  mr-3 p-2 w-[450px]"
    //               type="text"
    //             />
    //             <button className="rounded bg-red-600 px-9 py-2 text-white">
    //               Search
    //             </button>
    //           </div>
    //           {/* SEARCH BAR */}
    //         </div>
    //       </div>
    //       {/* HEADER */} {/* CARDS */}
    //       <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
    //         {/* CARD */}
    //         <div
    //           className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
    //         >
    //           <img
    //             src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
    //             alt=""
    //             className="w-full h-36"
    //           />
    //           <div className="p-1">
    //             <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
    //             <div className="flex items-start">
    //               <div className="flex mb-2">*****</div>
    //               <p className="ml-2">77 reviews</p>
    //             </div>
    //             <div className="flex text-reg font-light capitalize">
    //               <p className=" mr-3">Mexican</p>
    //               <p className="mr-3">$$$$</p>
    //               <p>Toronto</p>
    //             </div>
    //             <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
    //           </div>
    //         </div>
    //         {/* CARD */}
    //       </div>
    //       {/* CARDS */}
    //     </main>
    //   </main>
    // </main>
    // // 
  )
}


    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */}
