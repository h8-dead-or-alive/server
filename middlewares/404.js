module.exports = (req, res, next) => {
  next({ status: 404, message: 'Route not found' })
}
