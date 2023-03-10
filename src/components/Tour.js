import './styles/Tour.css';
import { ListGroup } from 'react-bootstrap';

function Tour() {
    return (
        <div className='tour'>
            <div className='tour-title'>
                <h1>Spirits Having Flown Tour</h1>
            </div>
            <div className='list-cont'>
                <h2 className='tour-us'>United States</h2>
                <ListGroup className='tour-list' variant="flush">
                    <ListGroup.Item>Fort Worth - Tarrant County Convention Center <span className='date'>June 28, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Austin - Special Events Center <span className='date'>June 29, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Houston - The Summit <span className='date'>June 30, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Denver - McNichols Sports Arena <span className='date'>July 2, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Salt Lake City - Salt Palace <span className='date'>July 3, 1979</span></ListGroup.Item>
                    <ListGroup.Item>San Diego - San Diego Sports Arena <span className='date'>July 5, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Los Angeles - Dodgers Stadium <span className='date'>July 7, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Oakland - Oakland-Alameda County Coliseum Arena <span className='date'>July 9-11, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Seattle - Seattle Center Coliseum <span className='date'>July 13-14, 1979</span></ListGroup.Item>

                </ListGroup>
            </div>
        </div>
    );
}

export default Tour;