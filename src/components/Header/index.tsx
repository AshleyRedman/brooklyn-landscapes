import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, Fragment, ReactElement } from 'react';
import logo from '../../../public/logo.jpg';
import urls from '../../config/urls';
import Button from '../Button';
import CustomLink from '../Link';

type NavItemProps = {
    text: string;
    href: string;
    className?: string;
};

const NavItem: FC<NavItemProps> = (props): ReactElement => {
    const router = useRouter();

    return (
        <li>
            <CustomLink
                href={props.href}
                label={props.text}
                className={`flex ${props.className ? props.className : ''}`}
            >
                <span
                    className={`block border-b-2 px-1 pt-3 pb-2 text-xs uppercase leading-none tracking-widest text-gray-600 ${
                        router.pathname === props.href ? 'border-b-green-500' : 'border-b-transparent'
                    }`}
                >
                    {props.text}
                </span>
            </CustomLink>
        </li>
    );
};

const Nav: FC = (): ReactElement => (
    <>
        <nav className="hidden md:block">
            <ul className="flex items-center space-x-4 lg:space-x-6">
                <NavItem href={urls.about.path} text="About us" />
                <NavItem href={urls.projects.path} text="Our work" />
                <NavItem href={urls.clients.path} text="Our clients" />
                <Button href={urls.contact.path} text="Contact us" isLink mode="DARK" />
            </ul>
        </nav>

        <Menu as="div" className="relative block text-left md:hidden">
            <Menu.Button className="flex items-center rounded-full outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-8 w-8 text-green-600" aria-hidden="true" />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    as="nav"
                    className="absolute right-0 z-50 mt-2 w-max origin-top-right rounded border border-green-400 bg-white shadow-xl outline-none"
                >
                    <ul className="py-1 px-4 text-right">
                        <Menu.Item>
                            <NavItem href={urls.about.path} text="About us" className="mx-auto mb-2 w-fit" />
                        </Menu.Item>
                        <Menu.Item>
                            <NavItem href={urls.projects.path} text="Our work" className="mx-auto mb-2 w-fit" />
                        </Menu.Item>
                        <Menu.Item>
                            <NavItem href={urls.clients.path} text="Our clients" className="mx-auto mb-2 w-fit" />
                        </Menu.Item>
                        <Menu.Item>
                            <NavItem href={urls.contact.path} text="Contact us" className="mx-auto mb-2 w-fit" />
                        </Menu.Item>
                    </ul>
                </Menu.Items>
            </Transition>
        </Menu>
    </>
);

const Header: FC = (): ReactElement => (
    <header className="w-full border-b-2 border-b-green-400 bg-white py-4 px-4 lg:fixed lg:top-0 lg:z-50">
        <div className="container mx-auto flex items-center justify-between">
            <CustomLink href={urls.home.path} label="Brooklyn Landscapes" className="w-48 md:w-60">
                <Image src={logo} alt="Brooklyn Landscapes logo" placeholder="blur" />
            </CustomLink>
            <Nav />
        </div>
    </header>
);

export default Header;
