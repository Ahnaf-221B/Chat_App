import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";


/**
 * @typedef {import ('react').AnchorHTMLAttributes<HTMLAnchorElement>} AchorHTMLProps
 * @typedef {AchorHTMLProps} AnchorProps
 */

/**
 * Anchor component
 * 
 * @param {AnchorProps} props
 * @param {JSX.Element}
 */

export function Anchor({className, children, ...props})
{
    const baseStyles = "text-indigo-600 hover:text-indigo-500";
  const classes = twMerge(clsx(baseStyles), className);

  return (
    <a className={classes} {...props}>
        {children}
    </a>
  )
}

Anchor.propTypes = {
	className: PropTypes.string,
    children: PropTypes.node
};