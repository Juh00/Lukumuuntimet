import React from 'react'
import Math from './components/Math/Math'
import './App.css'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BinToDecCon from './components/Conversion/BinToDecCon'
import DecToBinCon from './components/Conversion/DecToBinCon'
import DecToHexCon from './components/Conversion/DecToHexCon'
import DecToOctCon from './components/Conversion/DecToOctCon'
import Useful from './components/Useful/Useful'
import CharCount from './components/Useful/CharCount'
import VatCount from './components/Finance/VatCount'
import BMICalc from './components/Health/BMICalc'
import Home from './components/Home'
import Footer from './components/Footer'
import Finance from './components/Finance/Finance'
import Health from './components/Health/Health'
import Conversion from './components/Conversion/Conversion'
import LengthCon from './components/Conversion/LengthCon'

function App() {
    const containerStyle = {
    backgroundColor: '#fafafa'
}
  return (
    <Container style={containerStyle} className="mb-5">
    <Router>
        <Row className="mb-5">
          <Col>
          <Menu />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/matematiikka" render={() => <Math />} />
            <Route path="/yksikkomuuntimet/binaari-desimaali-muunnin" render={() => <BinToDecCon />} />
            <Route path="/yksikkomuuntimet/desimaali-binaari-muunnin" render={() => <DecToBinCon />} />
            <Route path="/yksikkomuuntimet/desimaali-heksadesimaali-muunnin" render={() => <DecToHexCon />} />
            <Route path="/yksikkomuuntimet/desimaali-oktaaliluku-muunnin" render={() => <DecToOctCon />} />
            <Route exact path="/hyoty" render={() => <Useful />} />
            <Route path="/hyoty/merkki-ja-sanalaskuri/" render={() => <CharCount />} />
            <Route exact path="/raha" render={() => <Finance />} />
            <Route path="/raha/alv-laskuri/" render={() => <VatCount />} />
            <Route exact path="/terveys" render={() => <Health />} />
            <Route path="/terveys/painoindeksilaskuri/" render={() => <BMICalc />} />
            <Route exact path="/yksikkomuuntimet" render={() => <Conversion />} />
            <Route path="/yksikkomuuntimet/pituusmuunnin/" render={() => <LengthCon />} />
          </Col>
          <Col>
            <Sidebar />
          </Col>
        </Row>
        <Footer />
    </Router>
    </Container>
  )
}

export default App;
