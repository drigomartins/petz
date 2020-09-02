import React from 'react';
import { 
    Img,
    Bar
 } from './styles';
import Logo from '../../images/logo.png'


export default class Topbar extends React.Component{
    
    render(){
        return (
            <Bar>
                <Img src={Logo} />
            </Bar>
        );
    }

}