import styles from './paragraph.module.scss';
import classNames from 'classnames';

const Paragraph = ({
    sizeSmall,
    size,
    color,
    bold,
    textAlign,
    margin,
    textDecoration,
    textTransform,
    children,
    lineHeight,
    letterSpacing,
    fontfamily,
    className,
    style,
    ...others
}) => {
    const dynamicStyles = {
        '--font-size': size ? size : undefined,
        '--font-size-small': sizeSmall ? sizeSmall : undefined,
        '--align': textAlign,
        '--color': color,
        '--bold': bold,
        '--text-decoration': textDecoration,
        '--text-transform': textTransform,
        '--line-height': lineHeight,
        '--letter-spacing': letterSpacing,
        '--font-family': fontfamily,
        margin,
    };
    const mergedStyles = { ...dynamicStyles, ...style };
    return (
        <p
            {...others}
            style={mergedStyles}
            className={classNames(styles.root, className)}
        >
            {children}
        </p>
    );
};

// Paragraph.propTypes = {
//   size: String,
//   color: String,
//   bold: Number,
//   textAlign: String,
//   margin: String,
//   textDecoration: String,
//   textTransform: String,
//   className: String,
//   children: String,
//   lineHeight: Number,
//   letterSpacing: String,
//   innerHTML: String,
// };

export default Paragraph;
