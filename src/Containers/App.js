import React,{Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll'
import SearchBox from '../Components/SearchBox'
import './App.css'

class App extends Component{
	constructor()
	{
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	onSearchChange=(event)=>
	{	
		this.setState({searchfield:event.target.value});
		
		
	}
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(robotList=> this.setState({robots:robotList}));
	}
	render()
	{
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

		})
		return(
			<div className="tc">
				<h1 className="f2 ">Robot Friends</h1>
				<SearchBox sc={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}
export default App;