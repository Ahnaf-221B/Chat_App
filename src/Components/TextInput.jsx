import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";


/**
 * @typedef {import('react').InputHTMLAttributes<HTMLInputElement>} InputHTMLProps
 * @typedef {InputHTMLProps &{
 * label?: string,
 * error?:string,
 * icon?: import('react').ReactNode
 * } } TextInputProps
 */

/**
 * TextInput component
 * 
 * @param {TextInputProps} props
 * @returns {JSX.Element}
 */

export function TextInput({className,label,error,icon,...props}){
    const baseStyles ="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500";
    const errorStyles ="border-red-300 focus:border-red-500 focus:ring-red-500";
    // eslint-disable-next-line no-undef
    const classes = twMerge(clsx(baseStyles, error && errorStyles), className);

    return (
			<div>
				{label && (
					<label className="block text-sm font-medium text-gray-700">
						{label}
					</label>
				)}

				<div className="relative">
					{icon && (
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							{icon}
						</div>
					)}
					<input className={clsx(classes, icon && "pl-10")} {...props} />
				</div>
				{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
			</div>
		);
}

TextInput.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.node,
    className: PropTypes.string
};