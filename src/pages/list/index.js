import React from 'react';
import { 
    Div,
    Input
 } from './styles';

import Topbar from '../../components/topbar';
import ItemList from '../../components/itemList';


export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            filteredList: []
        };
    }

    async getList(){
        try {

            const response = await fetch('https://my-json-server.typicode.com/drigomartins/jsonplaceholder/posts/')
            const data = await response.json()
            this.setState({list: data, filteredList: data});

        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {

        this.getList();

    }

    search(event) {
        const text = event.target.value;
        const filter = this.state.list.filter(function(item){
            return item.title.toString().toLowerCase().search(
                text.toString().toLowerCase()) !== -1;
        });
        this.setState({filteredList: filter});
    }
    
    render(){
        return (
            <Div>
                <Topbar />
                <Div className="container">
                    <Input onChange={this.search.bind(this)} placeholder="Digite o Nome" />
                    <Div className="row">
                        { this.state.filteredList.map(item => 
                            <ItemList key={item.id} id={item.id} title={item.title} />
                        )}
                    </Div>
                </Div>
            </Div>
        );
    }
}