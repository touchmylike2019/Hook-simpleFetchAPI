import React, { useState, useEffect } from 'react'
import { 
	Container, 
	Col,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle
} from 'reactstrap'

function App(){
	const [todos, setTodos] = useState([])
	useEffect(() => {
		fetch('http://jsonplaceholder.typicode.com/todos')
		.then(res => res.json())
		.then(data => {
			setTodos(data)
		})
	})
	return (
		<Container>
			<Col xs='12'>
		  		<h1>My Todos</h1>
		  		{todos.map((todo) => (
					<Card key={todo.id}>
						<CardBody>
							<CardTitle>{todo.title}</CardTitle>
							<CardSubtitle className="mb-2 text-muted">
								{ todo.completed &&
					  				<span>
					  					Completed
					  				</span>
								}
								{ !todo.completed &&
					  				<span>
										Pending
					  				</span>
								} 
							</CardSubtitle>             
				  		</CardBody>
					</Card>
				))}
		 	</Col>
		</Container>
	)}
  export default App