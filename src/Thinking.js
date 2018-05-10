/**
 * React 的编程思想
 *
 * @see https://reactjs.org/docs/thinking-in-react.html
 * 
 * @author  Yang,junlong at 2018-05-10 16:21:20 build.
 * @version $Id$
 */

import React, { Component } from 'react';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class Thinking extends Component {
	render() {
		return (
			<FilterableProductTable products={PRODUCTS} />
		);
	}
}

class FilterableProductTable extends Component{
	
	constructor(props) {
		super(props);

		this.state = {
			inStockOnly: false,
            filterText: ''
		};
	}

	checkHandler(){
        this.setState({
            inStockOnly: !this.state.inStockOnly
        });
    }

    textHandler(text){
        this.setState({
            filterText: text
        });
    }

	render() {
		return (
			<div>
              <SearchBar checkHandler={this.checkHandler.bind(this)} textHandler={this.textHandler.bind(this)}/>
              <ProductTable products={this.props.products} inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}/>
            </div>
		);
	}
}

class SearchBar extends Component{
	Handler(event){
        this.props.textHandler(event.target.value);
    }
	render() {
		return (
			<form>
	        <input type="text" placeholder="Search..." onChange={this.Handler.bind(this)}/>
	        <p>
	          <input type="checkbox" onChange={this.props.checkHandler}/>
	          {' '}
	          Only show products in stock
	        </p>
	      </form>
		);
	}
}

class ProductTable extends Component{
	render() {
		var rows = [];
		var lastCategory = null;
		var products = this.props.products;
		var inStockOnly = this.props.inStockOnly;
		var filterText = this.props.filterText;
		products = inStockOnly ? products.filter(function(product) {
			return product.stocked;
		}) : products;
		products = filterText ? products.filter(function(product) {
			return product.name.indexOf(filterText) !== -1;
		}) : products;
		products.forEach(function(product) {
			if(product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
		});
		return (
			<table>
                <thead>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td><strong>Price</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
		);
	}
}

class ProductCategoryRow extends Component{
	render() {
		return (
			<tr>
				<td><strong>{this.props.category}</strong></td>
			</tr>
		);
	}
}

class ProductRow extends Component {
	render() {
		var name = this.props.product.stocked ?
		this.props.product.name : 
		<span style={{color: 'red'}}>{this.props.product.name}</span>;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}


export default Thinking;