import React,{Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll'
import SearchBox from '../Components/SearchBox'
import './App.css'


import {setSearchField,setRobots} from '../Actions.js'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>
{
	return{
		searchField: state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		pending: state.requestRobots.pending,
		error: state.requestRobots.error
		}
}
const mapDispatchToProps=(Dispatch)=>
{
	return {
		onSearchChange:(event)=>Dispatch(setSearchField(event.target.value)),
		onSearchRobots:()=>Dispatch(setRobots())
	}
}


class App extends Component{
	
	////To update the users fetched from outside world////
	componentDidMount()
	{
		this.props.onSearchRobots();
	}
	render()
	{
		
		const {searchField,onSearchChange,robots,pending}=this.props;
		const filteredRobots=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase())

		})
		return(
				
				<div className="tc">
					<h1 className="f2 ">Robot Friends</h1>
					<SearchBox sc={onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
				
		);
		
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);