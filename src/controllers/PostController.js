const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const {
      title,
      theme,
      description,
      emailUser,
      comments,
      imageUrl
    } = req.body;

    try {
      const post = await Post.create({
        title,
        theme,
        description,
        emailUser,
        comments,
        imageUrl
      });

      return res.json(post);
    } catch (e) {
      return res.status(500).send('' + e);
    }
  },

  async getPosts(req, res) {
    const { theme } = req.params;

    try {
      const posts = await Post.find({ theme });
      return res.status(200).json(posts);
    } catch (e) {
      return res.status(500).send('' + e);
    }
  }
};
