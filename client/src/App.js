import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    highscore:0,
    score:0
  };

  removeFriend= id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    friends.sort( () => Math.random() - 0.5);
    // this.state.score++;
    this.setState({ friends, score: this.state.score +1, });
    this.setState({highscore: this.state.highscore +1});
  //   this.setState(prevState => {
  //     const friendsinfo = prevState.friendsinfo.map(friends => {
  //       if (friends.id === id) {
  //         friends.clicked = true;
  //         console.log(friends);
  //     } return friends;
  //   });
  //   return{
  //     friends: friendsinfo
  //   }
  //   // this.setState({ clicked: !this.state.clicked});
  // })
};

  booleanFriend = clicked => {
     this.setState({clicked: !this.state.clicked});
   }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar 
        score={this.state.score}
        highscore={this.state.highscore}
        />
        <Title>Friends List {this.state.score} </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            booleanFriend={this.booleanFriend}
            clicked={this.state.clicked}
            nickname={friend.nickname}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
