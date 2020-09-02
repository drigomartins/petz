import React from 'react';
import { 
    Div,
    Content,
    Description,
    Options,
    Info,
 } from './styles';
import { Link } from "react-router-dom";


export default class ItemList extends React.Component{
    
    render(){
        return (
            <Div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <Content>
                    <Description>
                        {this.props.title}
                    </Description>
                    <Options>
                        <Link to={"/item/" + this.props.id}>
                            <Info className="far fa-eye"></Info>
                        </Link>
                    </Options>
                </Content>
            </Div>
        );
    }

}