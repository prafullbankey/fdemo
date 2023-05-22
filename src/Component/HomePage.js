// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import { makeStyles } from '@material-ui/core/styles';
// import { Dashboard } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//     textDecoration: 'none',
//     color: 'inherit',
//   },
//   link: {
//     marginRight: theme.spacing(2),
//     textDecoration: 'none',
//     color: 'inherit',
//   },
//   iconButton: {
//     marginRight: theme.spacing(1),
//   },
// }));

// const  HomePage= () => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
//         Settings
//       </MenuItem>
//       <MenuItem component={Link} to="/logout" onClick={handleMenuClose}>
//         Logout
//       </MenuItem>
//       <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
//         Profile
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title} component={Link} to="/">
//             My Website
//           </Typography>
//           <Typography variant="body1" className={classes.link} component={Link} to="/login">
//             Login
//           </Typography>
//           <Typography variant="body1" className={classes.link} component={Link} to="/signup">
//             Signup
//           </Typography>
//           <Typography variant="body1" className={classes.link} component={Link} to="/about">
//             About
//           </Typography>
//           <Typography variant="body1" className={classes.link} component={Link} to="/contact">
//             Contact
//           </Typography>
//           <div>
//             <IconButton
//               className={classes.iconButton}
//               edge="end"
//               aria-label="account of current user"
//               aria-haspopup="true"
//               onClick={handleMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="more"
//               aria-haspopup="true"
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMenu}
//     </div>
//   );
// };

// export default HomePage;
import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default HomePage