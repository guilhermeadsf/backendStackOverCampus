const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const {
      title,
      theme,
      description,
      emailUser,
      comments,
      imageUrl,
      username
    } = req.body;

    try {
      const post = await Post.create({
        title,
        theme,
        description,
        emailUser,
        comments,
        imageUrl,
        username
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
  },

  async addComment(req, res) {
    try {
      const post = await Post.findById(req.body._id);
      post.comments.push(req.body.comment);
      await Post.findByIdAndUpdate(req.body._id, post);
      return res.status(200).send();
    } catch (e) {
      return res.status(500).send('' + e);
    }
  }
};
