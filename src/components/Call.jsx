import React, { Component } from "react";
import Card from "./Card";
const API = "https://randomuser.me/api/?results=3";
class Call extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: []
		};
	}
	componentDidMount() {
		fetch(API)
			.then(response => response.json())
			.then(data => this.setState({ person: data.results }));
		console.log(this.state.person);
	}
	render() {
		const { person } = this.state;
		return (
			<>
				{person.map(i => (
					<Card
						src={i.picture.large}
						firstName={i.name.first}
						lastName={i.name.last}
						email={i.email}
						cell={i.cell}
					/>
				))}
			</>
		);
	}
}
export default Call;

// <div class="bg-white rounded-lg p-6">
// 2    <img class="h-16 w-16 rounded-full mx-auto" src="avatar.jpg">
// 3    <div class="text-center">
// 4      <h2 class="text-lg">Erin Lindford</h2>
// 5      <div class="text-purple-500">Customer Support</div>
// 6      <div class="text-gray-600">erinlindford@example.com</div>
// 7      <div class="text-gray-600">(555) 765-4321</div>
// 8    </div>
// 9  </div>
