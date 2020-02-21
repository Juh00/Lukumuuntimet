import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Link to='/matematiikka/desimaali-binaari-muunnin'>Desimaaliluku - binäärilukumuunnin</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/matematiikka/binaari-desimaali-muunnin'>Binääriluku - desimaalilukumuunnin</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/matematiikka/desimaali-heksadesimaali-muunnin'>Desimaaliluku - heksadesimaalilukumuunnin</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/matematiikka/desimaali-oktaaliluku-muunnin'>Desimaaliluku - oktaalilukumuunnin</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Sidebar