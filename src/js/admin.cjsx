require ['react'], (React)->
    H = React.createClass
        displayName:'H'
        render:()->
            <h1>
                {@.props.name}
            </h1>

    CommentBox = React.createClass
        displayName:'CommentBox'
        render: ()->
            <div className="commentBox">
                <H name={@.props.name.name}/>
                {@.props.name.na}
            </div>


    React.render <CommentBox name={name:'chenglong',na:'cl'}/>, document.body