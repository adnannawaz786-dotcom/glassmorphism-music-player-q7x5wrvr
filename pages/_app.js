```javascript
import '../styles/globals.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Any required client-side setup can be done here
  }, []);

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
```