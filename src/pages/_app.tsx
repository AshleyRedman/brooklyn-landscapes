import { motion, MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Widget from '../components/Widget';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <MotionConfig reducedMotion="user">
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="relative"
            >
                <Widget />
                <Component {...pageProps} />
            </motion.div>
        </MotionConfig>
    );
};

export default App;
