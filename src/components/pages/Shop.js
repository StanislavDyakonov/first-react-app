import React, { Component } from 'react'
import Axios from 'axios';

import List from './Shop/List'

const URL = 'http://shop.just-stas.ru/api/'

export default class Shop extends Component {
    state = {
        items: []
    }

    getList = async () => {
        await Axios.get(URL)
            .then(res => this.setState({ items: res.data.goods }))
    }

    componentDidMount() {
        this.getList();
    }

    render() {
        return (
            <div className="shop">
                <h1>Shop</h1>
                <h2>Список продуктов</h2>
                <List items={this.state.items} />
            </div>
        )
    }
}