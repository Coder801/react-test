import { NavLink } from 'react-router-dom'

import style from './style.module.css'

const Navigation = () => {
  return (
    <nav className={style.navigation}>
       <NavLink activeClassName={style.selected} to="/dummyTable" className={style.link}>Table</NavLink>
       <NavLink activeClassName={style.selected} to="/dummyList" className={style.link}>List</NavLink>
       <NavLink activeClassName={style.selected} to="/dummyChart" className={style.link}>Chart</NavLink>
    </nav>
  )
}

export default Navigation
