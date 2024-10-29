import { Link as RouterLink } from "react-router-dom";

function Link({to, children}) {
  return (
    <RouterLink to={to} className="no-underline">
      {children}
    </RouterLink>
  )
}

export default Link;