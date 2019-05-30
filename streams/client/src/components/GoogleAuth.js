import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "303865220694-7e7k37lu662ijt5lu2gbe0693b13h013.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div> idk </div>;
    } else if (this.state.isSignedIn) {
      return <div> signed in</div>;
    } else {
      return <div> nah not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
