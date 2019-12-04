import React from "react";
import getDataFromServer from "../services/data";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.getUsersInfo();
  }

  getUsersInfo() {
    getDataFromServer().then(data => {
      console.log(data);
      let info = [];
      data.forEach(item => {
        info.push({
          login: item.login,
          image: item.avatar_url,
          followers: item.followers_url.length,
          following: item.following_url.length,
          repos: item.repos_url.length
        });
        data.url.map(item => {
          info.push({
            name: item.name
          });
        });
      });
    });
    //console.log(data.url);

    // .then(res => res.json())
    // .then(moreInfo => {
    //   let info = [];
    //   moreInfo.forEach(item => {
    //     info.push({
    //       login: item.login
    //     });
    //     //this.getMoreUserInfo(data);
    //   });
    // });
  }

  // getMoreUserInfo() {
  //   getDataFromServer().then(data => {
  //     fetch(data.url).then(res => res.json());
  //     let info = [];
  //     data.forEach(item => {
  //       info.push({
  //         login: item.login,
  //         image: item.avatar_url,
  //         followers: item.followers_url.length,
  //         following: item.following_url.length,
  //         repos: item.repos_url.length
  //       });
  //     });
  //   });
  //   console.log(data);
  // }

  //       id: item.id,
  //       name: item.name,
  //       description: item.description,
  //       homepage: item.homepage,
  //       repo: item.html_url,
  //       language: item.language
  //});

  // let filteredItems = [];
  // filteredItems.push(info[1], info[8], info[13], info[16], info[18]);
  //});

  render() {
    console.log("stado de la nacion", this.state);
    //const { projects } = this.state;
    return (
      <div className="App">{/* <ProjectsList projects={projects} /> */}</div>
    );
  }
}

export default App;
