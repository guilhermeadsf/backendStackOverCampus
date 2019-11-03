const AcademicWork = require('../models/AcademicWork');

module.exports = {
  async store(req, res) {
    const {
      tipo,
      titulo,
      orientando,
      orientador,
      descricao,
      academicWorkUrl
    } = req.body;

    try {
      const document = await AcademicWork.create({
        tipo,
        titulo,
        orientando,
        orientador,
        descricao,
        academicWorkUrl
      });

      return res.json(document);
    } catch (e) {
      return res.status(500).send('' + e);
    }
  }
};
