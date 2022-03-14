import type { NextPage } from 'next';
import Head from 'next/head';

import * as C from '../config';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{C.urls.home.title}</title>
                <meta name="description" content={C.urls.home.description} />
                <meta name="keywords" content={C.urls.home.keywords} />
                <link rel="canonical" href={C.urls.home.canonical} />
            </Head>
            <main>Hello</main>
        </>
    );
};

export default Home;
