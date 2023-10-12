// import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./logotest.png"
import {TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <nav className="nav" style={{ padding: '10px 0', height: '60px' }}>
      <img src={logo} alt="Logo" width="200" />
      <Paper
          component="form"
          sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 'auto', height: 40 }}
        >
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter Email Address"
            // value={searchStock}
            variant="standard"
            InputProps={{
                disableUnderline: true}}
            // onChange={(e) => setSearchStock(e.target.value)}
          />
          <Button variant="contained">Submit
          </Button>
          </Paper>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
