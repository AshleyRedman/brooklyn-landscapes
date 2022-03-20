import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import urls from '../../config/urls';
import Default from '../../layouts/Default';

const Contact: NextPage = (): ReactElement => (
    <>
        <Head>
            <title>{urls.contact.title}</title>
            <meta name="description" content={urls.contact.description} />
            <meta name="keywords" content={urls.contact.keywords} />
            <link rel="canonical" href={urls.contact.canonical} />
        </Head>
        <Default>
            <p>hello</p>
        </Default>
    </>
);

export default Contact;
