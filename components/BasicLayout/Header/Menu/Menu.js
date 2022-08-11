import React from 'react';
import {Container,Menu,Grid,Icon} from "semantic-ui-react";

export default function MenuHome() {
  return (
    <div className='menu' >
        <Container>
            <Grid>
                <Grid.Column className="menu__right" width={6}>
                    <h2>Lugar para mas cosas</h2>
                </Grid.Column>   
                <Grid.Column className="menu__left" width={10}>
                    <MenuOptions/>
                </Grid.Column>
            </Grid>
        </Container>
        
    </div>
  )
}

function MenuOptions(){
    return(
        <Menu>
            <Menu.Item>
                <Icon name="user outline"/>
                Mi cuenta
            </Menu.Item>
        </Menu>          
    )
}
