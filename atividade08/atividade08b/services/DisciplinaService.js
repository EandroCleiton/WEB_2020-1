const DisciplinaModel = require('../models/DisciplinaModel')

class DisciplinaService {

    static register(req, res) {
        DisciplinaModel.create(req.body)
            .then(
                (disciplina) => {
                    res.status(201).json(disciplina);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static list(req, res) {
        DisciplinaModel.find()
            .then(
                (disciplina) => {
                    res.status(201).json(disciplina);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static update(req, res) {
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
        .then(
            (disciplina) => {
                res.status(201).json(disciplina);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    //retorna o user deletado
    static delete(req, res) {
        DisciplinaModel.findByIdAndRemove(req.params.id)
        .then(
            (disciplina) => {
                res.status(201).json(disciplina);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    //retorna um user
    static retrieve(req, res) {
        DisciplinaModel.findById(req.params.id)
        .then(
            (disciplina) => {
                res.status(201).json(disciplina);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

}

module.exports = DisciplinaService