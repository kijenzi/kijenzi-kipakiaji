import React from 'react';
import { Grid } from 'semantic-ui-react';

class ItemGrid extends React.Component {

    constructor() {
        super();
        this.mapItems = this.mapItems.bind(this);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const props = this.props,
            items = this.mapItems(props.items, props.template);
        console.log(props);
        this.setState({items:items});
    }

    /**
     * Map an input item with a renderable template
     * @param {*} items containing information readable by the
     *  template function
     * @param {*} template function that reads an item and 
     *  returns an appropriate JSX view for it
     */
    mapItems(items, template) {
        return items.map((item, index) => (
            <Grid.Column key={index}>
                {template(item)}
            </Grid.Column>
        ))
    }

    render() {
        return (
            <Grid container stackable columns={4}>
                {
                    this.state.items.length ? this.state.items : 
                    (
                        <Grid.Column>
                            <h1>No Items</h1>
                        </Grid.Column>
                    )
                }
            </Grid>
        );
    }
}

export default ItemGrid;