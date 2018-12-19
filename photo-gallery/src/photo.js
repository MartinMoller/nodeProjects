import React, { Component } from 'react';
import img1 from './img/jordan.jpg';
import img2 from './img/usecase.png';

const imgs = [img1, img2];

class PhotoGallery extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getRandom = () => {
        const index = Math.floor(Math.random() * 2);
        return <img src={imgs[index]} alt="" />;
    }
    render() {
        const images = imgs.map((img, idx) =>
            <div key={idx}><img src={img} alt="" /></div>
        );

        return <div>{images}</div>;
    }


}

const ShowInput = (props) => <div>{props.value}</div>

class Form extends Component{
    constructor(){
        super();
        this.state = {value : ''};
    }

    componentDidUpdate = () =>{
        console.log(this.state.value)
    }
    updateInput = (event)=>{
        this.setState({value : event.target.value}, ()=>{

        })
    }

    render(){
        return <form>
            <input type="text" value={this.state.value} onChange={this.componentDidUpdate} ></input>
        </form>
    }
}

export default PhotoGallery;
export default Form;