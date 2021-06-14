import React from "react";

class EXP extends React.Component {
  render() {
    return <div>EXp</div>;
  }
}

export default EXP;
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import Prel from "./Preloader";
import Button from "./Button";
class App extends React.Component {
  state = { user: undefined, loading: false };

  async gettusers() {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const resultsJSON = await response.json();

    this.setState({ user: resultsJSON.results, loading: false });
  }

  componentDidMount() {
    //this.gettusers();
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <Prel />;
    return (
      <div>
        <Button start={() => this.gettusers()} label={" Загрузить "} />
        <div>
          <UsersList user={user} />
        </div>
      </div>
    );
  }
}

const rootelement = document.getElementById("root");
ReactDOM.render(<App />, rootelement);
