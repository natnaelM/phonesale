import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';

import { ProductConsumer } from '../context';

export default class ProductList extends Component {

 render() {
       

        return (
            // react fragment is just a div that won't be show in the DOM tree
            <React.Fragment> 
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>
                                
                        </div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}
