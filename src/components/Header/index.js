import {Nav, Logo} from './style'
import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <Nav>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
        alt="website logo"
      />
    </Link>
  </Nav>
)

export default withRouter(Header)
