const { Schema, model } = require('mongoose');

const AcademicWorkSchema = new Schema(
  {
    tipo: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    orientando: {
      type: String,
      required: true
    },
    orientador: {
      type: String,
      required: true
    },
    academicWorkUrl: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('AcademicWork', AcademicWorkSchema);
