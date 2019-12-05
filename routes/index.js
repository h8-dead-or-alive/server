const routes = require('express').Router()
const gcsUpload = require('gcs-upload')
const upload = gcsUpload({
  gcsConfig: {
    keyFilename: process.env.GOOGLE_KEYFILE_PATH,
    bucketName: 'aliftaufik-hacktiv8-buckets'
  }
})

const Controller = require('../controllers/Controller')

routes.post('/image', upload.single('image'), Controller.uploadImage)

module.exports = routes
