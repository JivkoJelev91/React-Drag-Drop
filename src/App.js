import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'
import './App.css';

const boxes = [0,1,2,3]; // Depends of how many boxes you have
const src = 'https://unsplash.it/200/200?image=1074'; // img from google which is exactly 200/200 size like sizes of boxes
const droppableParent = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%'
};

class App extends Component {
  state = {
    dragElement: '',
    indexImg: 0,
  }

  onDrop = (data, e) => {
    let index = +e.target.children[0].getAttribute('index');
    this.setState({
      dragElement: data.img,
      indexImg: index
    })
  }

  render() {
    return(
        <div className="App">
          <div style={droppableParent}>
            {boxes.map((box, key) => {
                return (
                  this.state.indexImg === key ?
                  <Draggable 
                  key={key}
                  type="img" 
                  data={this.src}>
                  <div className="draggedImg"><img src={src} alt="img"/></div>
                  </Draggable>
                  :
                  <Droppable
                  key={key}
                  types={['img']} // <= allowed drop types
                  onDrop={this.onDrop}>
                  <div className="droppable" 
                  index={key}>
                  <div>
                    <img 
                    src={this.state.indexImg === key ? this.state.dragElement : ''} 
                    alt="img"/>
                  </div>
                  </div>
                  </Droppable>
                )
              })}
          </div>
        </div>
    )
  }
}

export default App;
