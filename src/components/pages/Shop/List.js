import React, { Component } from 'react'

import Item from './Item'

export default class List extends Component {
    render() {
        let { items } = this.props

        console.log('items', items)

        const forItems = items.map(el => <Item item={el} key={el.id} />)

        return (
            <div className="shop-list">
                {forItems}
            </div>
        )
    }
}