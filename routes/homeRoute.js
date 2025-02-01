function homeHandler(req, res) {
  const data = load_Controller('home');;
  setOutput('home', data, res);
}
module.exports = homeHandler;