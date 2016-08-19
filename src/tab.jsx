/**@jsx React.DOM */
var React = require('react');
var Router = require('react-router');

var Tab = module.exports = React.createClass({

    /* handleClick: function() {
     *     this.props.selectPost(this.props.post.get('name'));
     * },*/

    capitaliseFirstLetter: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    render: function() {

        let selectedPost = this.props.selectedPost;
        let name = this.props.name;

        let tabClass = selectedPost == name ? 'currentLink' : 'inactiveLink';

        let link = `/${name}`;

        return (
            <div name={name} className='post-tab'>
                <Router.Link to={link} className={tabClass} >{this.capitaliseFirstLetter(name)}</Router.Link>
            </div>
        );
    }
});
