react & router

ReactDOM.render(
    (
        <Router history={browserHistory}>
        {/*主页*/}
        <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Redirect from="*" to='/404'>
        </Route>
        </Router>
        ), document.getElementByID('app')
);

const rootRoute = {
    path: '/',
    indexRoute: {
        getComponnent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('components/layer/HOmePage'))
            }, 'HOmePage')
        },
    },
    getComponnent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/Main'))
        }, 'Main')
    },
    childRoutes: [
    require('./../')
    ]
}

ReactDOM.render(
 (
    <Router
    history={browserHistory}
    routes={rootRoute}/>
    ), document.getElementByID('app')
);

