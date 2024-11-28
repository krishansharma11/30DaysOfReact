import React from "react";

// Functional component to display user information
const UserInfo = (props) => {
    return (
        <div style={styles.container}>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    );
};

// Styling for the component
const styles = {
    container: {
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
    },
};

export default UserInfo;
