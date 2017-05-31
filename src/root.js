import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import asyncComponent from './helpers/asyncComponent'

const history = createBrowserHistory()

const Table = asyncComponent(() => import('./components/dummyTable/index.jsx').then(module => module.default), { name: 'Table' });
const List = asyncComponent(() => import('./components/dummyList/index.jsx').then(module => module.default), { name: 'List' });
const Chart = asyncComponent(() => import('./components/dummyChart/index.jsx').then(module => module.default), { name: 'Chart' });

const Root = () => (
   <Router history={history}>
     <div>
       <div>
          <Link to="/dummyTable">Table</Link>
          <Link to="/dummyList">List</Link>
          <Link to="/dummyChart">Chart</Link>
       </div>
       <Route path="/dummyTable" component={Table} />
       <Route path="/dummyList" component={List} />
       <Route path="/dummyChart" component={Chart} />
     </div>
   </Router>
 )

export default Root;
