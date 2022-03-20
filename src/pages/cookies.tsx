import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import urls from '../config/urls';
import Information from '../layouts/Information';

const Cookies: NextPage = (): ReactElement => (
    <>
        <Head>
            <title>{urls.cookies.title}</title>
            <meta name="description" content={urls.cookies.description} />
            <meta name="keywords" content={urls.cookies.keywords} />
            <link rel="canonical" href={urls.cookies.canonical} />
        </Head>
        <Information>
            <p>Cookies</p>
        </Information>
    </>
);

export default Cookies;
