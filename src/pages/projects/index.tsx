import type { NextPage } from 'next';
import Head from 'next/head';

import urls from '../../config/urls';

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>{urls.projects.title}</title>
                <meta name="description" content={urls.projects.description} />
                <meta name="keywords" content={urls.projects.keywords} />
                <link rel="canonical" href={urls.projects.canonical} />
            </Head>
            <main>Hello</main>
        </>
    );
};

export default Projects;
