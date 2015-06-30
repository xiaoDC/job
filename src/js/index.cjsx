require ['react', './pubsub', './jquery'], (React, Pubsub, $)->
    $.when( $.ajax 'jobs' ).done (result)->
            console.log result

    JobList = React.createClass
        render:()->
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>

    PageItem = React.createClass
        getInitialState:()->
            active: false

        componentWillMount:()->
            self = this
            this.pubsub_token = Pubsub.subscribe 'changetab', (topic, signal)->
                if signal is self.props.seri_no
                    self.setState active: true
                else
                    self.setState active: false

        componentWillUnmount:()->
            Pubsub.unsubscribe this.pubsub_token

        componentDidMount:()->
            if this.props.className
                delete this.props.className

        render: ()->
            if this.props.className or this.state.active
                <div className='active'>
                    <JobList/>
                </div>
            else
                <div>
                    <JobList/>
                </div>


    PageBox = React.createClass
        render: ()->
            items = []
            items[0] = <PageItem key={0} displayName='内容1' className='active' seri_no='0'/>
            items[1] = <PageItem key={1} displayName='内容2' seri_no='1'/>
            items[2] = <PageItem key={2} displayName='内容3' seri_no='2'/>
            <ul className='page clear'>
                {items}
            </ul>


    TabItem = React.createClass
        getInitialState:()->
            active: false

        componentWillMount:()->
            self = this
            this.pubsub_token = Pubsub.subscribe 'changetab', (topic, signal)->
                if signal is self.props.seri_no
                    self.setState active: true
                else
                    self.setState active: false

        componentWillUnmount:()->
            Pubsub.unsubscribe this.pubsub_token

        componentDidMount:()->
            if this.props.className
                delete this.props.className

        handleClick: (e)->
            Pubsub.publish 'changetab', this.props.seri_no
            e.stopPropagation() or e.preventDefault()

        render: ()->
            if this.props.className or this.state.active
                <li className='active' onClick={this.handleClick}>
                    {this.props.displayName}
                </li>
            else
                <li onClick={this.handleClick}>
                    {this.props.displayName}
                </li>


    TabBox = React.createClass
        render: ()->
            items = []
            items[0] = <TabItem key={0} displayName='技术' className='active' seri_no='0'/>
            items[1] = <TabItem key={1} displayName='运营' seri_no='1'/>
            items[2] = <TabItem key={2} displayName='产品' seri_no='2'/>
            <ul className='nav-tab clear'>
                {items}
            </ul>


    App = React.createClass
        render: ()->
            <div className='index-page'>
                <TabBox/>
                <PageBox/>
            </div>

    React.render <App />, document.body