import { Link } from 'react-router-dom/dist'

function UserOption() {
  return (
    <div className="btn-group">
      <button type="button" className="btn signup-button dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        SIGNUP
      </button>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="user-signup">
          As User
        </Link>
        <Link className="dropdown-item" to="/parkner-signup">
          As Parkner
        </Link>
      </div>
    </div>
  )
}

export default UserOption
