/**@jsx React.DOM */

var React = require('react');
var Marked = require('marked');

var PostView = module.exports = React.createClass({

    getInitialState: function() {
        return {post: null};
    },

    componentDidMount: function() {
        this.loadPost();
    },

    componentDidUpdate (prevProps) {
        var oldName = prevProps.postName;
        var newName = this.props.postName;
        if (newName !== oldName) {
            this.loadPost();
        }
    },

    componentWillMount: function() {
        if (this.props.name == this.props.show) {
            this.setState({display: true});
        }
    },

    componentWillUnmount: function() {
        this.ignoreLastFetch = true;
    },

    componentWillReceiveProps: function(newProps) {
        if (this.props.name == newProps.show) {
            this.setState({display: true});
        } else {
            this.setState({display: false});
        }
    },

    loadPost: function() {

        var postName = this.props.postName || this.props.params.postName;
        var url = `http://thermador.herokuapp.com/api/page/${postName}`;

        // Inside our promise resolution, `this` means Window. Glee.
        var that = this;

        fetch(url).then(function(response){
            return response.json();
        }).then(function(parsedJson) {
            if (!that.ignoreLastFetch) {
                that.setState({post: parsedJson});
            }
        });

    },

    render: function() {

        if (this.state.post) {
            var html = Marked.parse(this.state.post.body);
            return (
                <div className="page">
                    <span dangerouslySetInnerHTML={{__html: html}} />
                </div>
            );
        } else {
            return null;
        }
    }
});
