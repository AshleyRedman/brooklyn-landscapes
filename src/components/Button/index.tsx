import { FC, ReactElement, useMemo } from 'react';
import CustomLink from '../Link';

type Props = {
    text: string;
    mode: 'LIGHT' | 'DARK';
    isLink?: boolean;
    href?: string;
    onClick?: () => void;
    className?: string;
};

const Button: FC<Props> = (props): ReactElement => {
    const styles = useMemo(
        () =>
            `font-archivo uppercase text-2xs leading-none tracking-widest font-medium py-4 px-6 !rounded-none focus:!rounded focus:!ring-offset-0 ${
                props.mode === 'LIGHT' ? 'bg-white text-black' : 'bg-green-400 text-white'
            } ${props.className ? props.className : ''}`,
        [props.mode, props.className]
    );

    if (props.isLink) {
        return (
            <CustomLink href={props.href ?? ''} label={props.text} className={styles}>
                <>{props.text}</>
            </CustomLink>
        );
    }

    return (
        <button onClick={() => props.onClick} className={styles}>
            {props.text}
        </button>
    );
};

export default Button;
