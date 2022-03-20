import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';
import Button from '../Button';

type FlareProps = {
    img: StaticImageData;
};

const Flare: FC<FlareProps> = (props) => (
    <motion.div
        initial={{ translateX: '1.5%', opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.15, stiffness: 75, duration: 0.45 }}
        className="absolute inset-0 z-20 hidden overflow-hidden lg:block"
    >
        <div className="absolute top-1/2 right-0 grid aspect-square h-1/2 -translate-y-1/2 rotate-45 grid-cols-2 overflow-hidden border-4 border-white lg:h-full lg:translate-x-2/3 lg:-translate-y-[45%] xl:translate-x-1/3">
            <div className="overflow-hidden border-4 border-white bg-transparent" />
            <div className="overflow-hidden border-4 border-white bg-transparent" />
            <div className="relative overflow-hidden border-4 border-white p-16">
                <div style={{ backgroundImage: `url(${props.img.src})` }} className="absolute -inset-28 -rotate-45" />
            </div>
            <div className="grid grid-cols-16 overflow-hidden border-4 border-white bg-transparent">
                {new Array(16).fill(0).map((_, i) => (
                    <span key={i} className="h-full w-px bg-white" />
                ))}
            </div>
        </div>
    </motion.div>
);

type HeroProps = {
    title: string;
    preTitle: string;
    text: string;
    buttonText: string;
    buttonLink: string;
    bgImg: StaticImageData;
    flareImg: StaticImageData;
    className?: string;
};

const Hero: FC<HeroProps> = (props): ReactElement => (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ backgroundImage: `url(${props.bgImg.src})` }}
        className={`relative bg-cover bg-center bg-no-repeat bg-origin-padding pt-8 pb-16 first-line:overflow-hidden lg:h-full lg:py-48 2xl:py-[15%] ${
            props.className ?? ''
        }`}
    >
        <div className="absolute inset-0 z-10 bg-black opacity-60" />
        <div className="container relative z-30 mx-auto px-8">
            <span className="block pt-8 text-xs font-semibold uppercase tracking-widest text-white">
                {props.preTitle}
            </span>
            <h1 className="w-full break-words py-8 text-3xl font-medium uppercase !leading-tight tracking-widest text-white md:text-4xl lg:w-1/2 xl:w-1/3 2xl:text-5xl">
                {props.title}
            </h1>
            <p className="mb-12 font-extralight tracking-wider text-white md:w-2/3 xl:w-1/3">{props.text}</p>

            <Button isLink text={props.buttonText} href={props.buttonLink} mode="LIGHT" />
        </div>
        <Flare img={props.flareImg} />
    </motion.section>
);

export default Hero;
