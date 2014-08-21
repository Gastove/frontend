/**@jsx React.DOM */

var React = require('react');

var Header = module.exports = React.createClass({
    render: function() {
        return (
            <div className="header">
              <div className="text">
                <h1>
                  Ross Donaldson's <p>Interblag Wobthing!</p>
                </h1>
              </div>
            </div>
        );
    }
});
