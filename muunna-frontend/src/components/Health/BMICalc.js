import React, { useState , useEffect} from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const BMICalc = () => {
    const [values, setValues] = useState({ weight: 70, height: 180, bmi: 20 })

    useEffect(() => {
        document.title = 'Painoindeksilaskuri - Laske & Muunna'
    })

    const handleHeightChange = (value) => {
        console.log(values)
        setValues({ ...values, height: value, bmi: values.weight / (value / 100) / (value / 100) })
        console.log(values)
    }

    const handleWeightChange = (value) => {
        console.log(values)
        setValues({ ...values, weight: value, bmi: value / (values.height / 100) / (values.height / 100) })
        console.log(values)
    }

    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../../">
                    <Breadcrumb.Item>
                        Alkuun
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to="../">
                    <Breadcrumb.Item>
                        Terveys
                    </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                    Painoindeksilaskuri
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Painoindeksilaskuri
            </h2>
            <p>
                Syötä laskuriin pituutesi ja painosi. Laskuri näyttää painoindeksin, painoluokan ja miten suuri riski sinulla on sairastua vakavasti painon vuoksi.
            </p>
            <label><b>Pituus:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>CM</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={({ target }) => handleHeightChange(target.value)}
                    value={values.height}
                />
            </InputGroup>
            <label><b>Paino:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>KG</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={({ target }) => handleWeightChange(target.value)}
                    value={values.weight}
                />
            </InputGroup>
            <h3>Painoindeksisi on {Math.round((values.bmi + Number.EPSILON) * 100) / 100}</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Paino kategoria</th>
                        <th scope="col">Painoindeksi (BMI)</th>
                        <th scope="col">Terveysriski</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={values.bmi < 18.5 ? "table-active" : void 0}>
                        <td>Alipaino</td>
                        <td>18.4 ja alle</td>
                        <td>Aliravitsemus riski</td>
                    </tr>
                    <tr className={values.bmi < 25 && values.bmi > 18.4 ? "table-active" : void 0}>
                        <td>Normaali paino</td>
                        <td>18.5 - 24.9</td>
                        <td>Matala riski</td>
                    </tr>
                    <tr className={values.bmi > 24.9 && values.bmi < 30 ? "table-active" : void 0}>
                        <td>Ylipaino</td>
                        <td>25 - 29.9</td>
                        <td>Kohonnut riski</td>
                    </tr>
                    <tr className={values.bmi > 29.9 && values.bmi < 35 ? "table-active" : void 0}>
                        <td>Merkittävä ylipaino</td>
                        <td>30 - 34.9</td>
                        <td>Keskivakava riski</td>
                    </tr>
                    <tr className={values.bmi > 34.9 && values.bmi < 40 ? "table-active" : void 0}>
                        <td>Vaikea ylipaino</td>
                        <td>35 - 39.9</td>
                        <td>Korkea riski</td>
                    </tr>
                    <tr className={values.bmi > 40 ? "table-active" : void 0}>
                        <td>Sairaalloinen ylipaino</td>
                        <td>40 ja yli</td>
                        <td>Erittäin korkea riski</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BMICalc