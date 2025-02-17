import React from "react";

class MyComponent extends React.Component {
    //jsx
    render() {
        return (
            <div>
                my first component
                <h5>Số random: {Math.random()}</h5>
            </div>
        );
    }
}

export default MyComponent;