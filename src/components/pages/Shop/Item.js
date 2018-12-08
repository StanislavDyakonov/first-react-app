import React from 'react'

import {nf} from '../../../js/utils'

export default class Item extends React.Component {
    render() {
        const { item } = this.props
        const { data } = item

        console.log('item', item)
        console.log('info', data)

        return (
            <div className="shop-list-item-wrap">
                <div className="shop-list-item-border">
                    <div className="shop-list-item">
                        <div className="shop-list-item-image">
                            <img src={data.base_url} alt={data.title} />
                        </div>
                        <div className="shop-list-item-info">
                            <div className="shop-list-item-name">
                                {data.title}
                            </div>
                        </div>
                        <div className="shop-list-item-price">
                            {nf(data.price)} ₽
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}