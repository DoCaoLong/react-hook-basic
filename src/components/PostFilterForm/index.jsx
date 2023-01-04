import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState("");
    const typingTimeoutRef = useRef(null);

    function handleChange(e) {
        const valueTarget = e.target.value;
        setValue(valueTarget);
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                value: valueTarget,
            };
            onSubmit(formValue);
        }, 300);
    }
    return (
        <div>
            <input type="search" value={value} onChange={handleChange} />
        </div>
    );
}

export default PostFilterForm;
