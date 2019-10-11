import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./Example.css";
import logo from "./download.jpeg";
import logo2 from "./images.jpeg";
import logo1 from "./download1.jpeg";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="navstyle">
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Movies</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                      <Link to="/thriller">Thriller</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to="/Comedy">Comedy</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to="/Documentaries">Documentaries</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/Rohuu48?tab=repositories">
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100%" }}
          >
            <Grid container spacing={24}>
              <img src={logo} width="250px" style={{ padding: "50px 20px" }} />
              <img src={logo1} width="250px" style={{ padding: "50px 20px" }} />
              <img
                src={logo2}
                height="475px"
                width="250px"
                style={{ padding: "50px 20px" }}
              />
            </Grid>
            <h1
              style={{
                fontFamily: "sansserif",
                color: "red",
                padding: "20px 20px"
              }}
            >
              {" "}
              New Movies On The Go!{" "}
            </h1>
          </Typography>
        </Container>
      </div>
    );
  }
}

export default withRouter(Example);
