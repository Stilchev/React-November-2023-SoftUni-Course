import ListGroup from 'react-bootstrap/ListGroup';

export default function ListItem({
    text,
    isCompleted
}) {
    return(
        <ListGroup.Item action href="#link1">
        {text}
      </ListGroup.Item>
    )
}