require ['react'], (React)->
    H = React.createClass
        render:()->
            <h1>
                {@.props.name}
            </h1>

    CommentBox = React.createClass
        # displayName:'CommentBox'
        render: ()->
            <div className="commentBox">
                <H name={@.props.name.name}/>
                {this.props.name.na}
            </div>

    React.render <CommentBox name={name:'chenglong',na:'cl'}/>, document.body