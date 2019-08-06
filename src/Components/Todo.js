import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { 
	Container, 
	Col,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle
} from 'reactstrap'

function Todo(){
    const [todos, setTodos] = useState([])
	useEffect(() => {
		axios.get('http://jsonplaceholder.typicode.com/todos')
			// .then(res => res.json())
			// .then(data => {
			// 	setTodos(data)
            // })
            // .then(res => {
            //     setTodos(res.data)
            // })
            .then(res => console.log(res))
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
    )
}

export default Todo