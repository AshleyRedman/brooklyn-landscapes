import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <NextNProgress
                color={'#007334'}
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
                showOnShallow={false}
                options={{
                    showSpinner: false
                }}
            />
            <Component {...pageProps} />
        </>
    );
};

export default App;
