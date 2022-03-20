import type { NextPage } from 'next';
import Head from 'next/head';
import heroImage from '../../public/bg-one.jpg';
import grassImage from '../../public/grass.jpeg';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import urls from '../config/urls';
import Default from '../layouts/Default';

import planningImage from '../../public/planning.jpg';
import rollingImage from '../../public/rolling.jpg';
import mowingImage from '../../public/mowing.jpg';
import designImage from '../../public/design.jpg';

const Home: NextPage = () => (
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
                bgImg={grassImage}
                flareImg={heroImage}
                className="bg-bottom"
            />

            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                <ServiceCard
                    img={planningImage}
                    title="Planning"
                    subTitle="Fresh & creative ground concepts"
                    className="bg-green-600"
                />
                <ServiceCard img={designImage} title="Design" subTitle="Lorem ipsum" className="bg-gray-500" />
                <ServiceCard
                    img={rollingImage}
                    title="Implementation"
                    subTitle="Start to finish, problems solved"
                    className="bg-green-500"
                />
                <ServiceCard
                    img={mowingImage}
                    title="Maintenance"
                    subTitle="Helping everything stay green"
                    className="bg-green-400"
                />
            </section>

            <section className="py-48">hello</section>
        </Default>
    </>
);

export default Home;
