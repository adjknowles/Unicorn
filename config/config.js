module.exports = {
  'secret':  process.env.PROJECT3_SECRET,
  'database': process.env.MONGOLAB_URI || 'mongodb://localhost:27017/project3'
};