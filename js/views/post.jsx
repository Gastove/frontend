/**@jsx React.DOM */

var React = require('react');
var Marked = require('marked');

var PostView = module.exports = React.createClass({

    getInitialState: function() {
        return {display: false};
    },

    componentWillMount: function() {
        if (this.props.key == this.props.show) {
            this.setState({display: true});
        }
    },

    componentWillReceiveProps: function(newProps) {
        if (this.props.key == newProps.show) {
            this.setState({display: true});
        } else {
            this.setState({display: false});
        }
    },

    render: function() {

        if (this.state.display) {
            var md = Marked(this.props.post.get("body"));
            return (
                <div className="page">
                  <span dangerouslySetInnerHTML={{__html: md}} />
                </div>
            );
        } else {
            return null;
        }
    }
});
