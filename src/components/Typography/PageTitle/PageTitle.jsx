import styles from './pageTitle.module.scss';
import classNames from 'classnames';

const PageTitle = ({
    size,
    color,
    bold,
    lineHeight,
    textAlign,
    className,
    children,
    style,
    ...others
}) => {
    const dynamicStyles = {
        '--color': color,
        '--font-size': size,
        '--font-weight': bold,
        '--text-align': textAlign,
        '--line-height': lineHeight,
    };
    const mergedStyles = { ...dynamicStyles, ...style };
    return (
        <h1
            {...others}
            style={mergedStyles}
            className={classNames(styles.pageTitle, className)}
        >
            {children}
        </h1>
    );
};

export default PageTitle;
