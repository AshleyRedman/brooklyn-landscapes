import { PhoneIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';
import urls from '../../config/urls';
import CustomLink from '../Link';

const Widget: FC = (): ReactElement => (
    <motion.div
        initial={{ opacity: 0, bottom: 0 }}
        animate={{ opacity: 1, bottom: '3%' }}
        transition={{ delay: 1.5, stiffness: 75 }}
        className="fixed right-6 z-50 rounded-full bg-green-500"
    >
        <CustomLink href={urls.contact.path} label="Get in touch" className="block !rounded-full p-3">
            <PhoneIcon className="h-6 w-6 text-white" />
        </CustomLink>
    </motion.div>
);

export default Widget;
