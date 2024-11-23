import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
            md: "h-12",
            lg: "h-14",
        },
    },
});

export const Button = (
    props: {
        variant: "primary" | "secondary";
        size?: "sm" | "md" | "lg";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { variant, size , className, ...rest } = props;
    return (
        <button
            className={classes({ variant, className, size })}
            {...rest}
        ></button>
    );
};
