/**@jsx React.DOM */

var React = require('react');
var Tab = require('./tab');
var Posts = require('../collections/posts');

var Sidebar = module.exports = React.createClass({

    render: function() {
        var selectPost = this.props.selectPost;
        var show = this.props.show;

        var tabs = this.props.posts.map(
            function(post) {
                return <Tab key={post.id}
                            post={post}
                            selectPost={selectPost}
                            show={show}/>;
            }
        );

        return (
            <div className="side-bar">
              <img src={this.props.avatarUrl} href="www.gastove.com"/>
              {tabs}
            </div>
        );
    }
});
