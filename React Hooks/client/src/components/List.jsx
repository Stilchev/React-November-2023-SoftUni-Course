import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from './ListItem';

export default function LinkedExample({
    todos,
}) {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    return (
        <ListGroup style={{ width: '250px', margin: '50px 0px 0px 500px' }} defaultActiveKey="#link1">

            {todos.map(todo => <ListItem key={todo._id} {...todo} />)}

            <ListGroup.Item action onClick={alertClicked}>
                Add ToDo
            </ListGroup.Item>
        </ListGroup>
    );
}

