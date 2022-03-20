import { FC, ReactElement } from 'react';

type Props = {
    img: StaticImageData;
    title: string;
    subTitle: string;
    className?: string;
};

const ServiceCard: FC<Props> = (props): ReactElement => (
    <div className={props.className ?? ''}>
        <div
            style={{ backgroundImage: `url(${props.img.src})` }}
            className="h-60 bg-cover bg-center bg-no-repeat group-focus:m-2 2xl:h-96 "
        />
        <div className="py-4 px-8">
            <span className="block pb-1 text-lg font-light uppercase tracking-widest text-white lg:text-3xl">
                {props.title}
            </span>
            <span className="block text-xs font-extralight uppercase tracking-wider text-white">{props.subTitle}</span>
        </div>
    </div>
);

export default ServiceCard;
