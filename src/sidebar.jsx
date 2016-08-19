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
                return <Tab name={post.id}
                            key={post.id}
                            post={post}
                            selectPost={selectPost}
                            show={show}/>;
            }
        );

        return (
            <div className="side-bar">
              <img src={this.props.avatarUrl} href="www.gastove.com"/>
              <hr />
              <div className="icons">
                <a href="http://www.twitter.com/Gastove">
                  <i className="fa fa-twitter fa-2x"/>
                </a>
                <a href="http://www.github.com/Gastove">
                  <i className="fa fa-github fa-2x"/>
                </a>
              </div>
              <hr />
              {tabs}
            </div>
        );
    }
});
