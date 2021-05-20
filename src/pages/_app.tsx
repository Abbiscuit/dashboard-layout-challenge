import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex flex-row w-full bg-gray-50">
        <Link href={`/view-and-logic`}>ViewLogic</Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
