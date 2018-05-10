import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Jsx from './Jsx';
import Thinking from './Thinking';

import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

ReactDOM.render(<Router>
    <div>
      <ul>
      	<li><Link to="/">首页</Link></li>
      	<li><Link to="/jsx">jsx简介</Link></li>
      	<li><Link to="/thinking">编程思想</Link></li>
      </ul>
      <Route exact path="/" component={App} />
      <Route exact path="/jsx" component={Jsx} />
      <Route exact path="/thinking" component={Thinking} />
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
