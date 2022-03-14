import type { NextPage } from 'next';
import Head from 'next/head';

import * as C from '@config';

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>{C.urls.projects.title}</title>
                <meta name="description" content={C.urls.projects.description} />
                <meta name="keywords" content={C.urls.projects.keywords} />
                <link rel="canonical" href={C.urls.projects.canonical} />
            </Head>
            <main>Hello</main>
        </>
    );
};

export default Projects;
