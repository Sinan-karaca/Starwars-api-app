import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
       <Menu inverted>
           <Container>
               <Link to='/Home'>
                <Menu.Item name='star wars API'/>
               </Link>
               <Link to='/Planets'>
                <Menu.Item name='Planets'/>
               </Link>
           </Container>
       </Menu>
    )
}
