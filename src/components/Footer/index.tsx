import { FC, ReactElement } from 'react';
import urls from '../../config/urls';
import CustomLink from '../Link';

type LinkProps = {
    link: string;
    label: string;
};

const SocketLink: FC<LinkProps> = (props): ReactElement => (
    <li>
        <CustomLink href={props.link} label={props.label}>
            <span className="text-2xs text-gray-500 underline decoration-gray-500">{props.label}</span>
        </CustomLink>
    </li>
);

const FooterLink: FC<LinkProps> = (props): ReactElement => (
    <li>
        <CustomLink href={props.link} label={props.label}>
            <span className="text-2xs font-medium uppercase tracking-widest text-gray-500 lg:text-xs">
                {props.label}
            </span>
        </CustomLink>
    </li>
);

const Footer: FC = (): ReactElement => (
    <footer className="bg-gray-300 py-12 2xl:py-20">
        <div className="container mx-auto space-y-12 px-8 md:space-y-20">
            <ul className="flex items-center justify-start space-x-4 md:justify-end lg:space-x-8">
                <FooterLink link={urls.about.path} label="About us" />
                <FooterLink link={urls.projects.path} label="Our work" />
                <FooterLink link={urls.clients.path} label="Our clients" />
                <FooterLink link={urls.contact.path} label="Contact us" />
            </ul>

            <div className="flex flex-col-reverse items-start justify-between md:flex-row md:items-center">
                <span className="text-2xs tracking-wide text-gray-500">
                    @ {new Date().getFullYear()} Brooklyn Landscapes. All Rights Reserved
                </span>
                <ul className="flex items-center space-x-6">
                    <SocketLink link={urls.cookies.path} label="Cookie Policy" />
                    <SocketLink link={urls.privacy.path} label="Privacy Policy" />
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
