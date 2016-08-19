/**@jsx React.DOM */

var React = require('react');
var ReactDom = require('react-dom');

var PostView = require('./postsView');
var Sidebar = require('./sidebar');
var Header = require('./header');
var Router = require('react-router');

var avatarUrl = "http://www.gravatar.com/avatar/a942cea13e537bb0ea754b6d216c3377?size=160";

var App = React.createClass({

    render: function () {
        return (
            <div className="app">
                <Header />
                <Sidebar avatarUrl={avatarUrl}
                         selectedPost={this.props.params.postName || "home"}
                         show={true}/>
                {this.props.children || <PostView postName={"home"}/>}
            </div>
        );
    }

});

ReactDom.render((
    <Router.Router history={Router.browserHistory} >
        <Router.Route path="/" component={App} >
            <Router.Route path="/:postName" component={PostView} />
        </Router.Route>
    </Router.Router>
), document.getElementById('web-app'));
