// Import Components
import React from 'react';
import {Menu, Container, Image, Icon} from 'semantic-ui-react'

class Navbar extends React.Component { 
    render() {
        return(
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header>
                        <Icon name='cloud' size='big' />
                        FileHub
                    </Menu.Item>
                    <Menu.Item>
                        Files
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            Sign in
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default Navbar;