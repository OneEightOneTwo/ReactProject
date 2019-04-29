import React from 'react';
import { Router, Route, Switch } from 'dva/router';



//引入主页
import Index from './routes/Index/Index';
import News from './routes/News/News';
import AllBooks from './routes/AllBooks/AllBooks'
import ReadCard from './routes/ReadCard/ReadCard'
import Help from './routes/Help/Help'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/news" exact component={News} />
        <Route path="/allbooks" exact component={AllBooks} />
        <Route path="/readcard" exact component={ReadCard} />
        <Route path="/help" exact component={Help} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
