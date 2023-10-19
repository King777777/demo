import { useState, useEffect } from 'react';

function MyButton() {
	const [count, setCount] = useState(0);
	
	useEffect(()=>{
		setInterval(()=>{setCount( count + 1)}, 1000);
	},[count])
	
	return (
		<button >
			{count} times
		</button>
	);
}

export default function MyApp() {
	return (
		<div>
			<h1>Counters that update separately</h1>
			<MyButton />
			{/*<MyButton />*/}
			{/*<MyButton />*/}
		</div>
	);
}
