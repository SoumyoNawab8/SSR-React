import React,{Component} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const DivContainer=styled.div`
margin-left:5em;
margin-right:5em;

`;

class List extends Component{
    componentWillMount(){
        console.log('assa');
    }
    render(){
        return(
            <div style={this.props.style}>
                <ul>
                    <li>This is another Fish</li>
                    <li>This is another Component</li>
                    <li>This is another Component</li>
                    <li>This is another Component</li>
                    <li>This is another Component</li>
                </ul>
            </div>
        )
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.handleclick=this.handleclick.bind(this);
    }
   
    handleclick(){
        this.props.history.push('new');
    }

    render(){
        return(
           <DivContainer>
               <h1>Lorem Ipsum</h1>
        <p>
       This is my PAGE </p>
        <List style={{marginTop:'1em'}} />
        <a href='/new'>New</a>
       <button onClick={this.handleclick}>Click</button>
           </DivContainer>
        )
    }
}


export default withRouter(App);