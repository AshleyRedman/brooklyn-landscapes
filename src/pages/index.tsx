import type { NextPage } from 'next';
import Head from 'next/head';

import Default from '../layouts/Default';
import urls from '../config/urls';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{urls.home.title}</title>
                <meta name="description" content={urls.home.description} />
                <meta name="keywords" content={urls.home.keywords} />
                <link rel="canonical" href={urls.home.canonical} />
            </Head>
            <Default>
                <p>hello</p>
            </Default>
        </>
    );
};

export default Home;
