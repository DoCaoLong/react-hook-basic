import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
    handleSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    handleSubmit: null,
};
function TodoForm(props) {
    const { handleSubmit } = props;
    const [value, setValue] = useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formValue = {
            title: value,
        };
        handleSubmit(formValue);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmitForm}>
            <input type="search" onChange={handleChange} value={value} />
        </form>
    );
}

export default TodoForm;
