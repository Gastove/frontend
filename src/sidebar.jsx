/**@jsx React.DOM */

var React = require('react');
var Tab = require('./tab');
/* var Posts = require('../collections/posts');*/

var Sidebar = module.exports = React.createClass({

    getInitialState: function() {
        return {allPosts: []};
    },

    componentWillMount: function() {
        this.loadAvailablePosts();
    },

    loadAvailablePosts: function() {
        let url = `http://thermador.herokuapp.com/api/page/list`;

        // Inside our promise resolution, `this` means Window. Glee.
        let that = this;

        fetch(url).then(function(response){
            return response.json();
        }).then(function(parsedJson) {
            if (!that.ignoreLastFetch) {
                that.setState({allPosts: parsedJson});
            }
        })
    },

    render: function() {

        var selectedPost = this.props.selectedPost;

        var tabs = this.state.allPosts.map(
            function(post) {
                return <Tab name={post}
                            key={post}
                            selectedPost={selectedPost} />;
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
