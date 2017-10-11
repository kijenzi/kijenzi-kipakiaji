// Import Components
import React from 'react';
import {Menu, Container, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class Navbar extends React.Component { 
    render() {
        return(
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header>
                        <Icon name='cloud' size='big' />
                        FileHub
                    </Menu.Item>
                    <Menu.Item link>
                        <Link to='/'>Files</Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item link>
                            Sign in
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default Navbar;