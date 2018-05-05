import React, { Component } from "react";
import Nav from "./components/Nav";
import Name from "./components/Name";
import Inst from "./components/Inst";
import Score from "./components/Score";
import Intro from "./components/Intro";
import Images from "./components/Images";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topscore: 0,
    images,
    clicked: images
  };

  clickImage = id => {
    if (this.state.clicked.find(image => image.id === id)) {
      //if the image was there remove and continue
      const clicked = this.state.clicked.filter(image => image.id !== id);
      this.setState({ clicked, score: this.state.score + 1, images: this.shuffle(this.state.images)});
    } else {
      //if the image wasn't there the game is over
      this.topScore();
      this.setState({ score: 0, clicked: images, images: this.shuffle(this.state.images) })
    }
  }

  topScore() {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score})
    }
  }

  shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Nav>
              <div className="col-md-4">
                <Name/>
              </div>
              <div className="col-md-4">
                <Inst/>
              </div>
              <div className="col-md-4">
                <Score
                  score={this.state.score}
                  topscore={this.state.topscore}
                />
              </div>
            </Nav>
          </div>
        </div>
        <div className="container">
           <div className="row">
             <div className="col-md-12">
               <Intro/>
             </div>
           </div>
          <div className="row">
            <div className="col-md-12">
              <Images>
                {this.state.images.map(image => (

                    <ImageCard
                      clickImage={this.clickImage}
                      id={image.id}
                      key={image.id}
                      image={image.image}
                    />
                  ))}   
              </Images>
            </div>
          </div>
        </div>
      </div>
    
    );
  }


  // {this.state.books.length ? (
  //   <List>
  //     {this.state.books.map(book => (
  //       <ListItem key={book._id}>
  //         <Link to={"/books/" + book._id}>
  //           <strong>
  //             {book.title} by {book.author}
  //           </strong>
  //         </Link>
  //         <DeleteBtn onClick={() => this.deleteBook(book._id)} />
  //       </ListItem>
  //     ))}
  //   </List>
  //)

    // <Container fluid>
    //     <Row>
    //       <Col size="md-6">
    //         <Jumbotron>
    //           <h1>What Books Should I Read?</h1>
    //         </Jumbotron>
    //         <form>
    //           <Input


    // return (
    //   <Wrapper>
    //     <Title>Images List</Title>
    //     <Score
    //       score={this.state.score}
    //       topscore={this.state.topscore}
    //     />
    //     {this.state.images.map(image => (
    //       <ImageCard
    //         clickImage={this.clickImage}
    //         id={image.id}
    //         key={image.id}
    //         image={image.image}
    //       />
    //     ))}
    //   </Wrapper>
  //   );
  // }
}

export default App;
