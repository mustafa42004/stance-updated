import { useEffect } from 'react';
import dynamic from 'next/dynamic';


// Dynamically import Navbar and Footer components if they rely on 'document'
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Layout = dynamic(() => import('../../node_modules/react-masonry-list'), {
  ssr: false,
});

// Importing CSS directly, these should not cause any issues
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ButtonEffect from '@/components/ButtonEffect';
import useAnimateOnIntersection from '@/components/useAnimateOnIntersection';

import "@/styles/main.scss";
import "@/styles/res.scss";


function App({ Component, pageProps }) {
  useEffect(() => {
    // Import JS files that depend on 'document' inside useEffect to ensure they run only on the client-side
    require('../../node_modules/jquery/dist/jquery.min.js');
    require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
  }, []);
  const selectors = [
    '.sec-head',
    '.banner-con h1'
  ];

  // Use the custom hook
  useAnimateOnIntersection(selectors);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ButtonEffect />
      <Footer />
    </>
  );
}

export default App;