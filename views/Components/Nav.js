var React = require("react");

var Nav = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse">
              <div className="container">
                <h1 className="navbar-brand">
                    React Universal Template
                </h1>
              </div>
            </nav>
        );
    }
});

module.exports = Nav;