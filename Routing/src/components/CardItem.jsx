import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {normalizeName} from '../utils/charUtils'

const CardItem = ({
    id,
    name,
    height,
    gender,
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>height: {height}</li>
                        <li>gender: {gender}</li>
                    </ul>
                </Card.Text>
                <Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;