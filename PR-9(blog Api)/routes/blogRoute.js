const express = require('express');

const routes = express.Router();

const { addBlog, viewBlog, deleteBlog, updateBlog } = require('../controllers/blogController')

const { tokenVerify } = require('../middleware/Auth');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});

const upload = multer({ storage: storage }).single('image');

routes.post('/addblog', tokenVerify, upload, addBlog);
routes.get('/viewblog', tokenVerify, viewBlog);
routes.delete('/deleteblog', tokenVerify, deleteBlog);
routes.put('/updateblog', upload, tokenVerify, updateBlog);



module.exports = routes;