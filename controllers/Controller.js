class Controller {
  static uploadImage(req, res, next) {
    res.status(201).json(req.body)
  }
}

module.exports = Controller
