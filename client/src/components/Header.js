import React, { Component } from "react";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return <a href="/logout">Logout</a>;
    }
  }
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Feedbackly
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect()(Header);
