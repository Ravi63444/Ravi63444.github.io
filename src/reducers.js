import {CHANGE_SEARCH_FIELD,STATUS_PENDING,STATUS_SUCCESS,STATUS_FAILURE} 
from './constant.js'


const initialStateSearch=
{
	searchField:''
}

export const searchRobots=(state=initialStateSearch,action={})=>
{
	switch(action.type)
	{
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField:action.payload});
		default:
			return state;
	}
}

const initialStateRobots=
{
	pending:false,
	robots:[],
	error:''
}

export const requestRobots=(state=initialStateRobots,action={})=>
{
	switch(action.type)
	{	
		case STATUS_PENDING:
			return Object.assign({},state,{pending:true});
		case STATUS_SUCCESS:
			return Object.assign({},state,{robots:action.payload ,pending:false});
		case STATUS_FAILURE:
			return Object.assign({},state,{error:action.payload, pending:false});
		default:
			return state;
	}
}