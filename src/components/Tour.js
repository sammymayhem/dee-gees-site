import './styles/Tour.css';
import { ListGroup } from 'react-bootstrap';

function Tour() {

    // List of tour dates
    const tour = [
        {
            city: 'Fort Worth',
            eventLoc: 'Tarrant County Convention Center',
            date: 'June 28, 1979'
        },
        {
            city: 'Austin',
            eventLoc: 'Special Events Center',
            date: 'June 29, 1979'
        },
        {
            city: 'Houston',
            eventLoc: 'The Summit',
            date: 'June 30, 1979'
        },
        {
            city: 'Denver',
            eventLoc: 'McNichols Sports Arena',
            date: 'July 2, 1979'
        },
        {
            city: 'Salt Lake City',
            eventLoc: 'Salt Palace',
            date: 'July 3, 1979'
        },
        {
            city: 'Salt Lake City',
            eventLoc: 'Salt Palace',
            date: 'July 3, 1979'
        },
        {
            city: 'San Diego',
            eventLoc: 'San Diego Sports Arena',
            date: 'July 5, 1979'
        },
        {
            city: 'Los Angeles',
            eventLoc: 'Dodgers Stadium',
            date: 'July 7, 1979'
        },
        {
            city: 'Oakland',
            eventLoc: 'Alameda County Coliseum Arena',
            date: 'July 9-11, 1979'
        },
        {
            city: 'Seattle',
            eventLoc: 'Seattle Center Coliseum',
            date: 'July 13-14, 1979'
        },
        {
            city: 'Canada | Vancouver',
            eventLoc: 'Pacific Coliseum',
            date: 'July 15, 1979'
        },
        {
            city: 'Portland',
            eventLoc: 'Memorial Coliseum',
            date: 'July 17-18, 1979'
        },
        {
            city: 'Saint Paul',
            eventLoc: 'St Paul Civic Center',
            date: 'July 21-22, 1979'
        },
        {
            city: 'Ames',
            eventLoc: 'Hilton Coliseum',
            date: 'July 24, 1979'
        },
        {
            city: 'Madison',
            eventLoc: 'Dane County Coliseum',
            date: 'July 25, 1979'
        },
        {
            city: 'Indianapolis',
            eventLoc: 'Market Square Arena',
            date: 'July 26, 1979'
        },
        {
            city: 'Pontiac',
            eventLoc: 'Pontiac Silver Dome',
            date: 'July 28, 1979'
        },
        {
            city: 'Chicago',
            eventLoc: 'Chicago Stadium',
            date: 'July 30-31, 1979'
        },
        {
            city: 'St Louis',
            eventLoc: 'Checkerdome',
            date: 'August 1, 1979'
        },
        {
            city: 'Tulsa',
            eventLoc: 'Mabee Center',
            date: 'August 13, 1979'
        },
        {
            city: 'Oklahoma City',
            eventLoc: 'Myriad Convention Center',
            date: 'August 4, 1979'
        },
        {
            city: 'New Haven',
            eventLoc: 'New Haven Veterans Memorial Coliseum',
            date: 'August 27, 1979'
        },
        {
            city: 'Providence',
            eventLoc: 'Providence Civic Center',
            date: 'August 28-29, 1979'
        },
        {
            city: 'Canada | Toronto',
            eventLoc: 'Maple Leaf Gardens',
            date: 'August 31, 1979'
        },
        {
            city: 'Canada | Montreal',
            eventLoc: 'Montreal Forum',
            date: 'September 1-2, 1979'
        },
        {
            city: 'Pittsburgh',
            eventLoc: 'Civic Arena',
            date: 'September 4-5, 1979'
        },
        {
            city: 'New York',
            eventLoc: 'Madison Square Garden',
            date: 'September 7-12, 1979'
        },
        {
            city: 'Buffalo',
            eventLoc: 'Buffalo Memorial Auditorium',
            date: 'September 14, 1979'
        },
        {
            city: 'Cincinnati',
            eventLoc: 'Riverfront Coliseum',
            date: 'September 15-16, 1979'
        },
        {
            city: 'Richfield',
            eventLoc: 'Richfield Coliseum',
            date: 'September 18-19, 1979'
        },
        {
            city: 'Philadelphia',
            eventLoc: 'The Spectrum',
            date: 'September 21-22, 1979'
        },
        {
            city: 'Landover',
            eventLoc: 'Capital Centre',
            date: 'September 24-25, 1979'
        },
        {
            city: 'Norfolk',
            eventLoc: 'Norfold Scope Arena',
            date: 'September 26, 1979'
        },
        {
            city: 'Birmingham',
            eventLoc: 'BJCC Coliseum',
            date: 'September 28, 1979'
        },
        {
            city: 'Atlanta',
            eventLoc: 'Omni Coliseum',
            date: 'September 29-30, 1979'
        },
        {
            city: 'Greensboro',
            eventLoc: 'Greensboro Coliseum',
            date: 'October 2, 1979'
        },
        {
            city: 'Columbia',
            eventLoc: 'Carolina Coliseum',
            date: 'October 3, 1979'
        },
        {
            city: 'Jacksonville',
            eventLoc: 'Jacksonville Memorial Coliseum',
            date: 'October 4, 1979'
        },
        {
            city: 'Miami',
            eventLoc: 'Miami Stadium',
            date: 'October 6, 1979'
        },
    ]

    // Create the list item for each tour date
    const renderTour = (tour, index) => {
        return (
            <ListGroup className='tour-list' variant="flush">
                <ListGroup.Item>{tour.city} - {tour.eventLoc} <span className='date'>{tour.date}</span></ListGroup.Item>
            </ListGroup>
        )
    }

    // Map over tour dates and have them all listed
    return (
        <div className='tour'>
            <div className='tour-title'>
                <h1>Spirits Having Flown Tour</h1>
            </div>
            <div className="list-cont">{tour.map(renderTour)}</div>;
        </div>
    );
}

export default Tour;