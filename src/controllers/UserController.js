const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  async store(req, res) {
    const { name, password, email, course } = req.body;

    const salt = bcrypt.genSaltSync();
    const encryptPassword = bcrypt.hashSync(password, salt);

    try {
      const user = await User.create({
        name,
        password: encryptPassword,
        email,
        course
      });

      return res.json(user);
    } catch (e) {
      return res.status(500).send('' + e);
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email }).select('password');

      if (user) {
        const { password: passwordHash } = user;
        if (bcrypt.compareSync(password, passwordHash))
          return res.status(200).send('Ok');
        else return res.status(400).send('Senha incorreta!');
      } else {
        return res.status(400).send('Não encontrado!');
      }
    } catch (e) {
      return res.status(500).send('' + e);
    }
  }
};
