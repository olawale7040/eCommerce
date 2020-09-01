import React from 'react';
import './shop.styles.scss';
import shopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class shopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection : shopData,
        }
    }
    render() {
        let { collection } = this.state;
        return(
            <div>
                <h2>Shop Page</h2>
                { 
                    collection.map(({id,...otherProps})=>(
                        <CollectionPreview key={id} {...otherProps }/>
                    ))
                }
                
            </div>
        )
    }
}


export default shopPage;