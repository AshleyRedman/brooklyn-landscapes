import { FC, ReactElement } from 'react';
import CustomLink from '../Link';

const Footer: FC = (): ReactElement => (
    <footer className="bg-gray-300 py-12 2xl:py-20">
        <div className="container mx-auto space-y-12 px-8 md:space-y-20">
            <ul className="flex items-center justify-start md:justify-end">
                <li>
                    <CustomLink href="#" label="About">
                        <span>Hello</span>
                    </CustomLink>
                </li>
            </ul>

            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                <span>Hello</span>
                <ul>
                    <li>
                        <CustomLink href="#" label="#">
                            <span>Hello</span>
                        </CustomLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
