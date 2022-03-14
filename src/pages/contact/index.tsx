import type { NextPage } from 'next';
import Head from 'next/head';

import * as C from '../../config';

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>{C.urls.contact.title}</title>
                <meta name="description" content={C.urls.contact.description} />
                <meta name="keywords" content={C.urls.contact.keywords} />
                <link rel="canonical" href={C.urls.contact.canonical} />
            </Head>
            <main>Hello</main>
        </>
    );
};

export default Contact;
