import React,{Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivStyled=styled.div`

font-size:3em;
`;

class AnotherPage extends Component{

    constructor(props){
        super(props);
        this.state={
            quote:'',
            author:''
        };
    } 

    componentWillMount(){
        var self =this;
        axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(function (response) {
            var q=response.data[0].content;
            q=q.split(">");
            q=q[1].split("<");
            self.setState({quote:q[0],author:response.data[0].title});
        })
        .catch(function (error) {
          console.log(error); 
        });
    }


    render(){
        return(<div style={{marginLeft:'5em',marginRight:'5em'}}>
           <DivStyled>This is another page</DivStyled> 
            <br/>
            <h3>below are the data from API:</h3><br/>

            <em >{this.state.quote}</em><br/>
            <p>{this.state.author}</p>

            <img src="../images/img.jpg" style={{width:'100%'}}></img>
        </div>
        );
    }
}
export default AnotherPage;