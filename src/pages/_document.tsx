import { Html, Head, Main, NextScript } from 'next/document';

const AppDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c6f3e" />
                <meta name="msapplication-TileColor" content="#0c6f3e" />
                <meta name="theme-color" content="#0c6f3e" />

                {/* <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="/meta/og-image.jpg" /> */}

                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="/meta/og-image.jpg"></meta> */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <body className="overflow-x-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default AppDocument;
