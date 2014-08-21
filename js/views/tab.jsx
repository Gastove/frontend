/**@jsx React.DOM */
var React = require('react');

var Tab = module.exports = React.createClass({

    handleClick: function() {
        this.props.selectPost(this.props.post.get('name'));
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
                {this.props.post.get('title')}
              </a>
            </div>
        );
    }
});
