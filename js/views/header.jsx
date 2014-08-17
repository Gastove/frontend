/**@jsx React.DOM */

var React = require('react');

var Header = module.exports = React.createClass({
    render: function() {
        return (
            <div className="header">
              <img src={this.props.avatarUrl} href="www.gastove.com"/>
              <div className="text">
                <h1>
                  Ross Donaldson's Interblag Wobthing!
                </h1>
              </div>
            </div>
        );
    }
});
