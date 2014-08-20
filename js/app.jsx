/**@jsx React.DOM */

var Backbone = require('backbone');
var React = require('react');
var BackboneMixin = require('./backbone_mixin');

var Posts = require('./collections/posts');
var PostsView = require('./views/postsView');
var Sidebar = require('./views/sidebar');
var Header = require('./views/header');

var avatarUrl = "http://www.gravatar.com/avatar/a942cea13e537bb0ea754b6d216c3377?size=160";

var app = React.createClass({
    mixins: [BackboneMixin],

    getInitialState: function() {
        return {show: "home"};
    },

    componentDidMount: function() {
        this.props.posts.fetch();
    },

    getBackboneModels: function() {
        return [this.props.posts];
    },

    selectPost: function(post) {
        this.setState({show: post});
    },

    render: function () {
        return (
            <div className="app">
              <Header />
              <Sidebar avatarUrl={avatarUrl}
                       posts={this.props.posts}
                       selectPost={this.selectPost}/>
              <PostsView posts={this.props.posts} show={this.state.show}/>
            </div>
        );
    }
});

React.renderComponent(<app posts={new Posts()} />,
                      document.getElementById('web-app'));
