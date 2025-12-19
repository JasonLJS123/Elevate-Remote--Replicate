import { Input, TextField } from "@mui/material";
import styles from "./formInput.module.scss";
import classNames from "classnames";
import FormLabel from "../Typography/FormLabel/FormLabel";

const FormInput = ({
    mb,
    textLabelColor,
    bold,
    margin,
    label,

    padding,
    textColor,
    phtextColor,
    size,
    fontWeight,
    phfontweight,
    fontFamily,
    bg,
    borderradius,
    border,
    children,
    style,
    className,
    ...props
}) => {

    const { lineHeight, ...restProps } = props;


    const formStyle = {
        "--margin-bottom": mb,
    };

    const dynamicStyles = {
        "--background": bg,
        "--border-radius": borderradius,
        "--border": border,
        "--text-color": textColor,
        "--ph-text-color": phtextColor,
        "--font-family": fontFamily,
        "--font-weight": fontWeight,
        "--ph-font-weight": phfontweight,
        "--padding": padding,
        "--size": size,
        "--line-height": lineHeight || "1.5",
    };
    const mergedStyles = { ...dynamicStyles, ...style };

    return (
        <div style={formStyle} className={classNames(styles.formGroup)}>
            {label != null && (
                <FormLabel textLabelColor={textLabelColor} bold={bold} margin={margin}>
                    {label}
                </FormLabel>
            )}

            <TextField
                select={props.select || false}
                slotProps={{
                    select: { native: false },
                }}
                style={mergedStyles}
                className={classNames(styles.formInput, className)}
                {...restProps} // safe, lineHeight is removed
            >
                {children}
            </TextField>

        </div>
    );
};

export default FormInput;
