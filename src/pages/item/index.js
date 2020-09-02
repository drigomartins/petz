import React from 'react';
import { 
    Div,
    Content,
    Title,
    Text
 } from './styles';

import Topbar from '../../components/topbar';
import ItemList from '../../components/itemList';


export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item:[],
        };
    }

    async getList(){
        try {

            const response = await fetch('https://my-json-server.typicode.com/drigomartins/jsonplaceholder/posts/' + this.props.id)
            const data = await response.json()
            this.setState({item: data});

        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {

        this.getList();

    }
    
    render(){
        return (
            <Div>
                <Topbar />
                {this.state.item.id &&
                    <Div className="container">
                        <Content>
                            <Title>
                                {this.state.item.title}
                            </Title>
                        </Content>
                        <Content>
                            <Text>
                                {this.state.item.description}
                            </Text>
                        </Content>
                    </Div>
                }
            </Div>
        );
    }
}