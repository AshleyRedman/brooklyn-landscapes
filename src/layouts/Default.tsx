import { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
    children: ReactChild | ReactChildren | ReactElement[];
};

const Default: FC<Props> = (props): ReactElement => (
    <>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </>
);

export default Default;
