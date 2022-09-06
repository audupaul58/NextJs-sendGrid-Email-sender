import React, {useEffect} from 'react';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
      }, []);

  return <Component {...pageProps} />
}

export default MyApp
