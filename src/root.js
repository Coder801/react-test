import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, IndexRoute } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import asyncComponent from './helpers/asyncComponent'

import Navigation from './components/navigation/'

import style from './style.module.css'

const history = createBrowserHistory()

const data = fetch('http://localhost:3001/static/tabs.json'); // Get static JSON for example

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    }
  }

  componentDidMount() {
    this.props.promise
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res,
          loading: false
        })
      })
  }

  render() {
    if(this.state.loading) {
      return <p>Loading...</p> // Some beautiful preloader
    } else {
      return (
        <Switch>
          {
            this.state.items.map((item, key) => (
              <Route path={`/${item.id}`} key={key} component={asyncComponent(() => import(`./components/${item.path}/index.jsx`).then(module => module.default), { name: `${item.title}` })} />
            ))
          }
        </Switch>
      )
    }
  }
}

const Root = () => (
   <Router history={history}>
    <div className={style.app}>
       <Navigation/>
       <div className={style.container}>
         <Content promise={data} />
       </div>
    </div>
   </Router>
 )

export default Root;
