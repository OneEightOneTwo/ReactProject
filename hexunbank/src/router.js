import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';


//引入主页
import Index from './routes/Index/Index';
import News from './routes/News/News'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index" exact component={Index} />
        <Route path="/News" exact component={News} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
