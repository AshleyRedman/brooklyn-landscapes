import Image from 'next/image';
import { FC, ReactElement } from 'react';
import chasImage from '../../../public/logo_accreditation_chas.png';
import constructionlineImage from '../../../public/logo_accreditation_constructionline.png';
import cscsImage from '../../../public/logo_accreditation_cscs.png';
import roloImage from '../../../public/logo_accreditation_rolo.png';
import smasImage from '../../../public/logo_accreditation_smas.png';
import CustomLink from '../Link';

type AccreditationProps = {
    label: string;
    link: string;
    img: StaticImageData;
    className?: string;
};

const Accreditation: FC<AccreditationProps> = (props): ReactElement => (
    <CustomLink
        href={props.link}
        label={props.label}
        className={`flex aspect-square items-center justify-center overflow-hidden rounded-none border border-gray-400 bg-white ring-inset transition-colors duration-300 hover:bg-gray-400 ${
            props.className ?? ''
        }`}
    >
        <span className="rotate-45">
            <Image src={props.img} alt={props.label} />
        </span>
    </CustomLink>
);

const Accreditations: FC = (): ReactElement => (
    <div className="block lg:grid lg:grid-cols-4">
        <h2 className="mt-16 text-2xl font-thin uppercase leading-7 tracking-wider lg:col-span-1 lg:text-3xl xl:pt-16 xl:pb-0">
            Our <span className="block font-semibold text-green-600">accreditations</span>
        </h2>
        <div className="-mt-8 mb-8 grid origin-center -rotate-45 grid-cols-5 md:-mt-16 lg:col-span-3 lg:mb-0 lg:mt-0 lg:origin-top">
            <Accreditation
                label="lorem"
                link="#"
                img={chasImage}
                className="col-start-1 col-end-2 row-start-1 row-end-1"
            />
            <Accreditation
                label="lorem"
                link="#"
                img={constructionlineImage}
                className="col-start-2 col-end-3 row-start-1 row-end-1"
            />
            <Accreditation
                label="lorem"
                link="#"
                img={cscsImage}
                className="col-start-1 col-end-2 row-start-2 row-end-2"
            />
            <Accreditation
                label="lorem"
                link="#"
                img={roloImage}
                className="col-start-2 col-end-3 row-start-2 row-end-2"
            />
            <Accreditation
                label="lorem"
                link="#"
                img={smasImage}
                className="col-start-3 col-end-4 row-start-2 row-end-2"
            />
            <Accreditation
                label="lorem"
                link="#"
                img={chasImage}
                className="col-start-3 col-end-4 row-start-3 row-end-3"
            />
            <Accreditation
                label="lorem"
                link="#"
                img={constructionlineImage}
                className="col-start-4 col-end-5 row-start-3 row-end-3"
            />
        </div>
    </div>
);

export default Accreditations;
