import styles from './formLabel.module.scss';
import classNames from 'classnames';

const FormLabel = ({
    size,
    textLabelColor,
    bold,
    textAlign,
    margin,
    textDecoration,
    className,
    children,
    style,
    ...others
}) => {
    const dynamicStyles = {
        '--color': textLabelColor,
        '--font-size': size,
        '--font-weight': bold,
        '--text-align': textAlign,
        '--text-decoration': textDecoration,
        '--margin': margin,
    };

    const mergedStyles = { ...dynamicStyles, ...style };

    return (
        <label
            {...others}
            style={mergedStyles}
            className={classNames(styles.formLabel, className)}
        >
            {children}
        </label>
    );
};

export default FormLabel;
