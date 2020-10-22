import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props}
                className={meta.touched ? (meta.error ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
            />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};


export default () => {
    return (
        <Formik
            initialValues={
                {
                    nomeDisciplina: '',
                    curso: '',
                    capacidade: ''
                }
            }
            validationSchema={Yup.object({
                nomeDisciplina: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                curso: Yup.string()
                    .max(35, 'Must be 35 characters or less')
                    .required('Required'),
                capacidade: Yup.string()
                    .max(5, 'Must be 4 characters or less')
                    .required('Required'),
            })}
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(
                        () => {
                            console.log(values.nomeDisciplina)
                            console.log(values.curso)
                            console.log(values.capacidade)
                            setSubmitting(false)
                        },
                        200
                    )
                }
            }
        >
            {
                (props) => (
                    <div className="card">
                        <div className="card-header">Criar Disciplina</div>
                        <div className="card-body">
                            <Form>

                                <div className="form-row">
                                    <div className="col-md-6">
                                        <MyTextInput
                                            label="Nome da disciplina"
                                            name="nomeDisciplina"
                                            id="nomeDisciplina"
                                            type="text"
                                            placeholder="Ex: Fundamentos da Programação"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <MyTextInput
                                            label="Curso"
                                            name="curso"
                                            id="curso"
                                            type="text"
                                            placeholder="Ex: Sistemas da Informação"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-4">
                                        <MyTextInput
                                            label="Capacidade"
                                            name="capacidade"
                                            id="capacidade"
                                            type="capacidade"
                                            placeholder="Ex: 25"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" type="submit" disabled={props.isSubmitting ? true : false}>Submit</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                )
            }

        </Formik>
    )
        }