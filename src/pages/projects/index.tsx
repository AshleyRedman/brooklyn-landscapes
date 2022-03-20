import type { NextPage } from 'next';
import Head from 'next/head';
import urls from '../../config/urls';
import Default from '../../layouts/Default';

const Projects: NextPage = () => (
    <>
        <Head>
            <title>{urls.projects.title}</title>
            <meta name="description" content={urls.projects.description} />
            <meta name="keywords" content={urls.projects.keywords} />
            <link rel="canonical" href={urls.projects.canonical} />
        </Head>
        <Default>
            <p>hello</p>
        </Default>
    </>
);

export default Projects;
