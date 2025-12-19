import btnStyle from './button.module.scss';
import classNames from 'classnames';

const Button = ({
    color,
    bold,
    textAlign,
    size,
    textDecoration,
    label,

    mb,
    style,
    pd,
    boxshadow,
    bg,
    hvbg,
    br,
    flex,
    box,
    onClick,
    children,
    className,
    ...others
}) => {
    const dynamicStyles = {
        /* '--margin-top': mt, */
        '--display': flex,
        '--margin-bottom': mb,
        '--background': bg,
        '--hover-background': hvbg,
        '--border-radius': br,
        '--padding': pd,
        '--border': box,
        '--box-shadow': boxshadow,
    };

    const labelStyles = {
        '--color': color,
        '--font-weight': bold,
        '--text-align': textAlign,
        '--font-size': size,
        '--text-decoration': textDecoration,
    };

    const mergedStyles = { ...dynamicStyles, ...style };
    return (
        <div
            {...others}
            style={mergedStyles}
            className={classNames(btnStyle.root, className)}
            onClick={onClick}
        >
            <div style={labelStyles} className={classNames(btnStyle.label)}>
                {label ?? children}
            </div>
        </div>
    );
};

export default Button;
