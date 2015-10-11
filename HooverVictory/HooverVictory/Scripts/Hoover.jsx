var CommentList = React.createClass({
    render: function() {
        return (
          <div className="commentList">            
          </div>
      );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
          <div className="commentForm">        
          </div>
      );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
          <div className="commentBox">
            <h1>HOOVER</h1>
            <CommentList />
            <CommentForm />
          </div>
          
      );
    }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);


