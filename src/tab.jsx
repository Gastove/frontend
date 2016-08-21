/**@jsx React.DOM */
var React = require('react');
var Router = require('react-router');

var Tab = module.exports = React.createClass({

    render: function() {

        var selectedPost = this.props.selectedPost;
        var name = this.props.name;

        var tabClass = selectedPost == name ? 'currentLink' : 'inactiveLink';

        var link = `/${name}`;

        return (
            <div name={name} className='post-tab'>
                <Router.Link to={link} className={tabClass} >{this.props.title}</Router.Link>
            </div>
        );
    }
});
