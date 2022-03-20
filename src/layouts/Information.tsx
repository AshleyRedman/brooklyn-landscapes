import { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
    children: ReactChild | ReactChildren | ReactElement[];
};

const Information: FC<Props> = (props): ReactElement => (
    <>
        <Header />
        <main className="lg:mt-24">
            <section className="container mx-auto px-8 py-12 lg:py-24 lg:px-48 2xl:px-60">{props.children}</section>
        </main>
        <Footer />
    </>
);

export default Information;
