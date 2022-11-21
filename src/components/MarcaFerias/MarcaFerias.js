import { useState } from "react"
import { Button, Form } from "react-bootstrap"


function MarcaFerias() {
    const [colaborador, setColaborador] = useState("")
    const [periodo, setPeriodo] = useState("")
    const [inicio, setInicio] = useState("")
    const [dias, setDias] = useState("")
    const [observacao, setObservacao] = useState("")

    const handleColaboradorInput = (e) => {
        setColaborador(e.target.value)
    }

    const handlePeriodoInput = (e) => {
        setPeriodo(e.target.value)
    }

    const handleInicioInput = (e) => {
        setInicio(e.target.value)
    }

    const handleDiasInput = (e) => {
        setDias(e.target.value)
    }

    const handleObservacaoInput = (e) => {
        setObservacao(e.target.value)
    }


    const handleSubmit = (e) => {
        //previne que a página sejá recarregada
        e.preventDefault()

        const novasferias = {
            colaborador,
            periodo,
            inicio,
            dias,
            observacao
        }

        console.log("Teste123: ", novasferias)


    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Colaborador(a)</Form.Label>
                <Form.Select>
                    <option>--</option>
                    <option>Haline</option>
                    <option>Leandro Arantes</option>
                    <option>Rafael</option>
                    value={colaborador}
                    onChange={handleColaboradorInput}
                </Form.Select>
                <Form.Label>Período</Form.Label>
                <Form.Select>
                    <option>--</option>
                    <option value="1">1º Período</option>
                    <option value="2">2º Período</option>
                    <option value="3">3º Período</option>
                    value={periodo}
                    onChange={handlePeriodoInput}
                </Form.Select>
                <Form.Label>Início das Férias</Form.Label>
                <Form.Control
                    value={inicio}
                    onChange={handleInicioInput}
                    type="date"
                    placeholder="Ex: 11/05/2022" />
                <Form.Text className="text-muted">
                    caso queira escrever algo aqui.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dias de férias</Form.Label>
                <Form.Control value={dias} onChange={handleDiasInput} type="number" placeholder="Ex: 10" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Observação</Form.Label>
                <Form.Control value={observacao} onChange={handleObservacaoInput} type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Estou ciente que as informações aqui prestadas..." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Socilitar
            </Button>
        </Form>
    )
}

export default MarcaFerias