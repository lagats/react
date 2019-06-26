import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                label="Title"
                onChange={props.onChange}
                name="title"
                value={props.course.title}
                error={props.errors.title}
            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        value={props.course.authorId || ""}
                        className="form-control"
                        onChange={props.onChange}
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.errors.authorId && (
                    <div className="alert alert-danger">{props.errors.authorId}</div>
                )}
            </div>

            <TextInput
                id="category"
                label="Title"
                onChange={props.onChange}
                name="category"
                value={props.course.category}
                error={props.errors.category}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

CourseForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired
};

export default CourseForm;