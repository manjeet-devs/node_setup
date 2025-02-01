function aboutHandler(req, res) {
  const data = load_Controller('about');
  setOutput('about', data, res);
}
module.exports = aboutHandler;
