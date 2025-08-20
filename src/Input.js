import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return(
        <div className="mb-3">
            <label className="form-label" htmlFor={props.name}>
                {props.title}
            </label>
            <input
                type={props.type}
                id={props.name}
                autoComplete={props.autoComplete}
                ref={ref}
                className={props.className}
                onChange={props.onChange}
            />
        </div>
    )
});

export default Input;