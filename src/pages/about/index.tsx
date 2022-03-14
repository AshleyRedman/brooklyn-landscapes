import type { NextPage } from 'next';
import Head from 'next/head';

import * as C from '../../config';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>{C.urls.about.title}</title>
                <meta name="description" content={C.urls.about.description} />
                <meta name="keywords" content={C.urls.about.keywords} />
                <link rel="canonical" href={C.urls.about.canonical} />
            </Head>
            <main>Hello</main>
        </>
    );
};

export default About;
