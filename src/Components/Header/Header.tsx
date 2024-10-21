import React from 'react'
import Search from '../Search/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from "./header.module.css"
import clsx from 'clsx';
const headerLinks = [

  {
    id: 1,
    label: 'Home',
    link: '/'
  },
  {
    id: 2,
    label: 'Directors',
    link: '/directors'
  },
  {
    id: 3,
    label: 'Movies',
    link: '/movies'
  },
]

const headerDropdown = [
  {
    id: 1,
    label: 'Services',
    link: '/add-director'
  }
]
type Props = {}

const Header = (props: Props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className='header'>
      <a href="#" className='logo'>Logo</a>

      <nav className="navbar">

        <ul className="nav-links">
          {headerLinks.map(item => <li>
            <Link key={item.id} to={item.link} className={clsx('nav-link', pathname === item.link && styles.active)}>{item.label}</Link>
          </li>)}

          <li className="nav-link services">
            <a href="#">Services
              <span className="material-icons dropdown-icon">
                <ArrowDropDownIcon />
              </span>
            </a>
            <ul className="drop-down">
              <li>Add director</li>
              <li>Add movie</li>
            </ul>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header