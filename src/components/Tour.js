import './styles/Tour.css';
import { ListGroup } from 'react-bootstrap';

function Tour() {
    return (
        <div className='tour'>
            <div className='tour-title'>
                <h1>Spirits Having Flown Tour</h1>
            </div>
            <div className='list-cont'>
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
                    <ListGroup.Item>Canada | Vancouver - Pacific Coliseum <span className='date'>July 15, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Portland - Memorial Coliseum <span className='date'>July 17-18, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Saint Paul - St Paul Civic Center <span className='date'>July 21-22, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Ames - Hilton Coliseum <span className='date'>July 24, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Madison - Dane County Coliseum <span className='date'>July 25, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Indianapolis - Market Square Arena <span className='date'>July 26, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Pontiac - Pontiac Silver Dome <span className='date'>July 28, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Chicago - Chicago Stadium <span className='date'>July 30-31, 1979</span></ListGroup.Item>
                    <ListGroup.Item>St Louis - Checkerdome <span className='date'>August 1, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Tulsa - Mabee Center <span className='date'>August 3, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Oklahoma City - Myriad Convention Center <span className='date'>August 4, 1979</span></ListGroup.Item>
                    <ListGroup.Item>New Haven - New Haven Veterans Memorial Coliseum <span className='date'>August 27, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Providence - Providence Civic Center <span className='date'>August 28-29, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Canada | Toronto - Maple Leaf Gardens <span className='date'>August 31, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Canada | Montreal - Montreal Forum <span className='date'>September 1-2, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Pittsburgh - Civic Arena <span className='date'>September 4-5, 1979</span></ListGroup.Item>
                    <ListGroup.Item>New York - Madison Square Gardens <span className='date'>September 7-12, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Buffalo - Buffalo Memorial Auditorium <span className='date'>September 14, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Cincinnati - Riverfront Coliseum <span className='date'>September 15-16, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Richfield - Richfield Coliseum <span className='date'>September 18-19, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Philadelphia - The Spectrum <span className='date'>September 21-22, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Landover - Capital Centre <span className='date'>September 24-25, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Norfolk - Norfolk Scope Arena <span className='date'>September 26, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Birmingham - BJCC Coliseum <span className='date'>September 28, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Atlanta - Omni Coliseum <span className='date'>September 29-30, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Greensboro - Greensboro Coliseum <span className='date'>October 2, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Columbia - Carolina Coliseum <span className='date'>October 3, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Jacksonville - Jacksonville Veterans Memorial Coliseum <span className='date'>October 4, 1979</span></ListGroup.Item>
                    <ListGroup.Item>Miami - Miami Stadium <span className='date'>October 6, 1979</span></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

export default Tour;