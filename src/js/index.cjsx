require ['react'], (React)->
    CommentBox = React.createClass
        render: ()->
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>

    React.render <CommentBox />, document.body