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
        className="absolute inset-0 z-20 overflow-hidden"
    >
        <div className="absolute top-1/2 right-0 hidden aspect-square h-1/2 -translate-y-1/2 rotate-45 grid-cols-2 overflow-hidden border-4 border-white md:grid md:translate-x-1/2 lg:h-full lg:-translate-y-[45%] lg:translate-x-1/3">
            <div className="overflow-hidden border-4 border-white bg-transparent" />
            <div className="overflow-hidden border-4 border-white bg-transparent" />
            <div
                style={{ backgroundImage: `url(${props.img.src})` }}
                className="overflow-hidden border-4 border-white p-16"
            />
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
};

const Hero: FC<HeroProps> = (props): ReactElement => (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ backgroundImage: `url(${props.bgImg.src})` }}
        className="relative bg-cover bg-center bg-no-repeat bg-origin-padding first-line:overflow-hidden md:h-screen md:pt-16 lg:pt-48"
    >
        <div className="absolute inset-0 z-10 bg-black opacity-30" />
        <div className="container relative z-30 mx-auto px-8 text-2xl text-green-400">
            <span>{props.preTitle}</span>
            <h1>{props.title}</h1>
            <p>{props.text}</p>

            <Button isLink text={props.buttonText} href={props.buttonLink} mode="LIGHT" />
        </div>
        <Flare img={props.flareImg} />
    </motion.section>
);

export default Hero;
