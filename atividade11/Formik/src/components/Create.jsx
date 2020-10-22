import React, { useState } from 'react'

export default () => {

    const [values, setValues] = useState({nomeDisciplina:'',curso:'',capacidade:''});

    const handleChange = event => {
        setValues(
            {
                ...values,
                [event.target.name]: event.target.value
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values.nomeDisciplina)
        console.log(values.curso)
        console.log(values.capacidade)
    }

    return (
        <div>
            <h1>Criar Disciplina</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nomeDisciplina">Nome da Disciplina: </label>
                    <input
                        id="nomeDisciplina"
                        name="nomeDisciplina"
                        type="text"
                        onChange={handleChange}
                        value={values.nomeDisciplina}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="curso">Curso: </label>
                    <input
                        id="curso"
                        name="curso"
                        type="text"
                        onChange={handleChange}
                        value={values.curso}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="capacidade">Capacidade: </label>
                    <input
                        id="capacidade"
                        name="capacidade"
                        type="capacidade"
                        onChange={handleChange}
                        value={values.capacidade}
                        className="form-control"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}