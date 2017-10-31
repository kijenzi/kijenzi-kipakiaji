// Import Components
import React from 'react';
import {Menu, Container, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import NotImplemented from './notImplemented';

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
                        {NotImplemented(
                            <Menu.Item as={Link} to=''>
                                Sign in
                            </Menu.Item>
                        )}
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default Navbar;