import React from 'react';
import SHOPDATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections : SHOPDATA
        }
    }

    render() {
        return <div>SHOP PAGE</div>
    }
}

export default ShopPage;