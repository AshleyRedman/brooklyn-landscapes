import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import urls from '../config/urls';
import Information from '../layouts/Information';

const Privacy: NextPage = (): ReactElement => (
    <>
        <Head>
            <title>{urls.privacy.title}</title>
            <meta name="description" content={urls.privacy.description} />
            <meta name="keywords" content={urls.privacy.keywords} />
            <link rel="canonical" href={urls.privacy.canonical} />
        </Head>
        <Information>
            <p>Privacy</p>
        </Information>
    </>
);

export default Privacy;
