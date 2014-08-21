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
        var key = this.props.key;
        var tabClass =  show == key ? 'current' : 'waiting';
        return (
            <div key={this.props.post.get('id')} className='post-tab'>
              <a className={tabClass}
                 href='#'
                 onClick={this.handleClick}>
                {this.capitaliseFirstLetter(this.props.post.get('name'))}
              </a>
            </div>
        );
    }
});
