import React from "react"

import Card from "./Card"
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"
import Foot from "./Foot"


// Home.jsx - like an HTML
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//const txt = ["Hello, welcome to my 1st React app!"]
//  

// <Jumbotron /> 
// for positioningJumbotron

	// Example card Array
	const cardArray = [
		{
			title: "Card Title 1",
			text: "This is a wider card with supporting text below as a natural lead-in to additional content.",
			imageUrl: "https://picsum.photos/400"
		},
		{
			title: "Card Title 2",
			text: "This card has supporting text below as a natural lead-in to additional content.",
			imageUrl: "https://picsum.photos/seed/picsum/400"
		},
		{
			title: "Card Title 3",
			text: "This is a wider card with supporting text below as a natural lead-in to additional content.",
			imageUrl: "https://picsum.photos/400.jpg"
		},

		{
			title: "Card Title 4",
			text: "This is a wider card with supporting text below . biuwheirheih iholwh lih; h;jiwoh;iwjih;ouih",
			imageUrl: "https://picsum.photos/400/?blur=2"
		}
	];		

 

	return (
			// FORMAT PAGE and Rendering
		<div className="text-center"> 
			{/* position components in Home's return() w/in a div */}
            <Navbar /> 
			<Jumbotron />
		
			{/* <h1 className="text-center mt-5">{txt}</h1> */}
			
			{/* map for cards */}
			<div className="d-flex row mt-5 p-3 justify-content-center">
				{/* Using the Card component to render each card */}
				{cardArray.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					text={card.text}
					imageUrl={card.imageUrl} />
			))}

			</div>

			<Foot/>
		</div>
		
	);
};

export default Home;