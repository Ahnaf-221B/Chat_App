import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').HTMLAttributes<HTMLSpanElement>} TextHTMLProps
 * @typedef {TextHTMLProps } TextProps
 */

/**
 * Text-Component
 *
 * @param {TextProps} props
 * @returns {JSX.Element}
 */

export function Text({ className, children, ...props }) {
	const baseStyles = "font-medium text-gray-900";
	const classes = twMerge(clsx(baseStyles), className);

	return (
		<p className={classes} {...props}>
			{children}
		</p>
	);
}
Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired, 
};
