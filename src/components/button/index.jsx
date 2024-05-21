import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

export default function Button({children,as,variant,size, ...props}) {

    return createElement(as, {
        ...props,
        className:classNames("h-10 flex justify-center items-center rounded-md",{
            "bg-sky-800 text-white font-medium" : variant === 'primary',
            "px-5" : size === 'normal',
    
        }),
    },children)
}

Button.propTypes = {
    children:PropTypes.element, //JSX elemanı olduğu için
    variant:PropTypes.oneOf(['primary','secondary']),
    size:PropTypes.oneOf(['small','normal','large']),
    as:PropTypes.string,
    props:PropTypes.object
}

Button.defaultProps = {
    as:'button',
    variant:'primary',
    size:'normal'
}
