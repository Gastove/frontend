/**@jsx React.DOM */
var React = require('react');

var Tab = module.exports = React.createClass({

    handleClick: function() {
        this.props.selectPost(this.props.post.get('name'));
    },

    render: function() {
        return (
            <div key={this.props.post.get('id')} className='post-tab'>
              <a href='#' onClick={this.handleClick}> {this.props.post.get('title')}</a>
            </div>
        );
    }
});
