/**@jsx React.DOM */

var Post = require('./post');
var React = require('react');

var PostsView = module.exports = React.createClass({

    resolvePostName: function() {
        if (this.props.hasOwnProperty("postName")) {
            return this.props.postName;
        } else if (this.props.hasOwnProperty("params")) {
            return this.props.params.postName;
        }
    },

    render: function() {

        let postName = this.resolvePostName()

        return (
            <div className = "posts-view">
                <Post postName={postName}
                      key={postName} />
            </div>
        );
    },
});
