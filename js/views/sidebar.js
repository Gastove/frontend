/**@jsx React.DOM */

var React = require('react');

var Sidebar = module.exports = React.createClass({
    render: function() {
        return (
                <div>
                    <img src={this.props.avatarUrl} href="www.gastove.com"/>
                </div>
        );
    }
})