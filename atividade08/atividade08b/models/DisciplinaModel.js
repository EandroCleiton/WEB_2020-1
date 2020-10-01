var mongoose = require('mongoose');

var DisciplinaSchema = mongoose.Schema(
    {
        disciplina: { type: String, required: true, max: 150 },
        curso: { type: String, required: true, max: 100 },
        capacidade: { type: Number, required: true },
    }
);

var DisciplinaModel = mongoose.model('disciplina', DisciplinaSchema);

module.exports = DisciplinaModel;required: true