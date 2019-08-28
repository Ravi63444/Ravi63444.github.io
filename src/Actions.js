import {CHANGE_SEARCH_FIELD,STATUS_PENDING,STATUS_SUCCESS,STATUS_FAILURE} 
from './constant.js'

export const setSearchField=(text)=>
({
	
			type: CHANGE_SEARCH_FIELD,
			payload: text
		
})

export const setRobots=()=>(dispatch)=>
{
	dispatch({type:STATUS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(data=>dispatch({type:STATUS_SUCCESS,payload:data}))
	.catch(error=>dispatch({type:STATUS_FAILURE,payload:error}))
}