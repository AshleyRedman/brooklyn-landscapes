import { ReactElement } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import urls from '../../config/urls';

const Contact: NextPage = (): ReactElement => {
    return (
        <>
            <Head>
                <title>{urls.contact.title}</title>
                <meta name="description" content={urls.contact.description} />
                <meta name="keywords" content={urls.contact.keywords} />
                <link rel="canonical" href={urls.contact.canonical} />
            </Head>
            <main>Hello</main>
        </>
    );
};

export default Contact;
