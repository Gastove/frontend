/**@jsx React.DOM */
var React = require('react');

var Tab = module.exports = React.createClass({

    handleClick: function() {
        this.props.selectPost(this.props.post.get('name'));
    },

    capitaliseFirstLetter: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    render: function() {
        var show = this.props.show;
        var name = this.props.name;
        var tabClass = show == name ? 'current' : 'waiting';
        return (
            <div name={name} className='post-tab'>
              <a className={tabClass}
                 href='#'
                 onClick={this.handleClick}>
                {this.capitaliseFirstLetter(this.props.post.get('name'))}
              </a>
            </div>
        );
    }
});
