import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bookings } from "./action/action";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const mapStateToProps = store => {
  return {
    users: store.users
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      bookings
    },
    dispatch
  );
};
class AllBookers extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      loading: true,
      isOpen: false,
      abc:
        this.props.match.params.id1.charAt(0).toUpperCase() +
        this.props.match.params.id1.substr(1).toLowerCase()
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    this.props.bookings(this.props.match.params.id2);
    //  console.log(this.props.location.state);

    console.log(this.props.users.ID);
    setTimeout(() => {
      this.props.users.users.map(item => {
        console.log(item.ID);
      });
      // const { user } = this.props.location.state;
      console.log(this.props.users);
    }, 2000);
  }
  render() {
    if (this.props.users.length == 0) {
      this.setState({
        loading: false
      });
      return <div>Loading</div>;
    } else {
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
                        <Link to={`/${this.props.match.params.id1}`}>
                          {this.state.abc}
                        </Link>
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
          <Paper
            style={{
              width: "100%",

              overflowX: "auto"
            }}
          >
            <Table
              style={{
                minWidth: 700
              }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">
                    Email Id&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">Gender&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">
                    Phone No&nbsp;
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.users.users.map(row => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.gender}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.phno}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBookers);
