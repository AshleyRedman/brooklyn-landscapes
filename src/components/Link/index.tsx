/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
    href: string;
    className?: string;
    scroll?: boolean;
    target?: string;
    label?: string;
    children: React.ReactElement[] | React.ReactElement;
    onClick?: () => void;
};

const CustomLink: FC<Props> = (props): ReactElement => (
    <Link href={props.href} scroll={props.scroll}>
        <a
            target={props.target ?? '_self'}
            rel={props.target === '_blank' ? 'noreferrer noopener' : ''}
            aria-label={props.label}
            title={props.label}
            onClick={props.onClick}
            role="button"
            tabIndex={0}
            className={`rounded outline-0 hover:cursor-pointer focus:overflow-hidden focus:ring-4 focus:ring-yellow focus:ring-offset-2 ${
                props.className ? props.className : ''
            }`}
        >
            {props.children}
        </a>
    </Link>
);

export default CustomLink;
