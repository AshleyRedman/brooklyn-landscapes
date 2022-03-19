import type { NextPage } from 'next';
import Head from 'next/head';
import heroBG from '../../public/bg-one.jpg';
import Hero from '../components/Hero';
import urls from '../config/urls';
import Default from '../layouts/Default';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{urls.home.title}</title>
                <meta name="description" content={urls.home.description} />
                <meta name="keywords" content={urls.home.keywords} />
                <link rel="canonical" href={urls.home.canonical} />
            </Head>
            <Default>
                <Hero
                    title="Commercial landscaping"
                    preTitle="Specialising in"
                    text="Brooklyn Landscapes is a commercial landscaping company established for over twenty years, providing out clients with quality work and great value"
                    buttonText="Get a quote"
                    buttonLink={urls.contact.path}
                    bgImg={heroBG}
                    flareImg={heroBG}
                />
            </Default>
        </>
    );
};

export default Home;
