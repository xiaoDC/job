require ['react'], (React)->
    # Tab = React.createClass
    #     getInitialState:()->
    #         selected: false

    #     changeSelect:()->
    #         this.setState
    #             selected: !this.state.selected

    #     render: ()->
    #         if this.state.selected
    #             <li className='selected' onClick={this.changeSelect}>
    #                 {this.props.name.name}
    #             </li>
    #         else
    #             <li onClick={this.changeSelect}>
    #                 {this.props.name.na}
    #             </li>

    # SearchBar = React.createClass
    #     searchHandler: ()->
    #         this.props.searchHandler(this.refs.searchKey.getDOMNode().value);

    #     render: ()->
    #         <div className='bar'>
    #             <input type='text' ref='searchKey' />
    #         </div>
    PageItem = React.createClass
        render: ()->
            if this.props.className
                <div className={this.props.className}>
                    {this.props.displayName}
                </div>
            else
                <div>
                    {this.props.displayName}
                </div>


    PageBox = React.createClass
        render: ()->
            <ul className='page clear'>
                <PageItem displayName='内容1' className='active'/>
                <PageItem displayName='内容2'/>
                <PageItem displayName='内容3'/>
            </ul>


    TabItem = React.createClass
        getInitialState:()->
            active: false

        handleClick: ()->
            this.props.click(this)

        render: ()->
            if this.props.className or this.state.active
                <li className={this.props.className||'active'} onClick={this.handleClick}>
                    {this.props.displayName}
                </li>
            else
                <li onClick={this.handleClick}>
                    {this.props.displayName}
                </li>


    TabBox = React.createClass
        handleClick: (item)->
            console.log this
            item.setState active:true
        render: ()->
            <ul className='nav-tab clear'>
                <TabItem displayName='技术' className='active' click={this.handleClick}/>
                <TabItem displayName='运营' click={this.handleClick}/>
                <TabItem displayName='3' click={this.handleClick}/>
            </ul>


    App = React.createClass
        render: ()->
            <div className='index-page'>
                <TabBox/>
                <PageBox/>
            </div>

    React.render <App />, document.body