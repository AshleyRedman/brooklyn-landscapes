import type { NextPage } from 'next';
import Head from 'next/head';
import urls from '../../config/urls';
import Default from '../../layouts/Default';

const About: NextPage = () => (
    <>
        <Head>
            <title>{urls.about.title}</title>
            <meta name="description" content={urls.about.description} />
            <meta name="keywords" content={urls.about.keywords} />
            <link rel="canonical" href={urls.about.canonical} />
        </Head>
        <Default>
            <p>hello</p>
        </Default>
    </>
);

export default About;
