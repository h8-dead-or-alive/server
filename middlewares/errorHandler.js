module.exports = (err, req, res, next) => {
  let status, message

  switch (err.name) {
    default:
      status = err.status || 500
      message = err.message || 'Internal Server Error'
      break
  }

  res.status(status).json(message)
}
