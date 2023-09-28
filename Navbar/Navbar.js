import { Button, Container } from "@mui/material";
import classes from "./navbar.module.css";
import logo from "./product_logo.png";
import avtar from "./user.png";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";

function Navbar({ isAuthorized }) {
  console.log("inside navbar", isAuthorized);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          margin: "15px",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div className={classes.avtarSec}>
          {isAuthorized ? <img src={avtar} alt="logo" className={classes.avtar}/>: <div className={classes.avtar}></div>}
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.avtarSec}>
          <Button className={classes.signStatus}>
            <Link to="/login" className={classes.myclass}>
              {!isAuthorized ? "SIGN IN" : "SIGN OUT"}
            </Link>
          </Button>

        </div>
      </div>
      <div className={classes.navcontainer}>
        <div className={classes.navbar}>
          <p>
            {isAuthorized ? (
              <Link to="/selftest" className="sign-in">
                SELF TEST
              </Link>
            ) : (
              "SELF TEST"
            )}
          </p>
          <p>iMR</p>
          <p>LIFESTYLE ADVICES</p>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
