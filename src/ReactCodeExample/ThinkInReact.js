import React from 'react';

const PRODUCTS = [
	{category: "Fruits", price: "$1", stocked: true, name: "Apple"},
	{category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
	{category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
	{category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
	{category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
	{category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchBar(props){
	return (
		<>
			<input placeholder="Search..." />
			<input type="checkbox" />Only show products in Stock
		</>
	)
}

function ProductTable(props){
	const { products } = props;
	const productKind = {};
	const rows = [];
	products.forEach(product => {
		if(!productKind[product.category]){
			productKind[product.category] = [{name: product.name, price: product.price}];
		} else {
			productKind[product.category].push({name: product.name, price: product.price});
		}
	});
	console.log("productKind: ", productKind);
	Object.keys(productKind).forEach(key => {
		rows.push(<ProductCategoryRow category={key}/>);
		productKind[key].forEach(item => {
			rows.push(<ProductRow name={item.name} price={item.price} />)
		})
	});
	console.log("rows",rows);
	return (
		<table>
			<th>Name</th>
			<th>Price</th>
			<tbody>{rows}</tbody>
		</table>
	)
}

function ProductCategoryRow(props){
	const {category} = props;
	return (
		<tr span="2">
			<td>{category}</td>
		</tr>
	)
	
}

function ProductRow(props){
	const {name, price} = props;
	return (
		<tr>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	)
}

function FilterableProductTable(props){
	const { products } = props;
	return (
		<>
			<SearchBar />
			<ProductTable products={products}/>
		</>
	)
}

export default function App(props){
	return <FilterableProductTable products={PRODUCTS} />
}

