import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HEADER_SX = {
  flexGrow: 1,
};
const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={HEADER_SX}>
            React-Router + Material-UI
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Photos
          </Button>
          <Button component={Link} to="posts" color="inherit">
            Posts
          </Button>
          <Button component={Link} to="comments" color="inherit">
            Comments
          </Button>
          <Button component={Link} to="users" color="inherit">
            Users
          </Button>
        </Toolbar>
      </AppBar>
      ;
    </>
  );
};
export { Header };
