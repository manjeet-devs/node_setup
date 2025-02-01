function contectHandler(req, res) {
  const response = load_Controller('contect');
  setOutput('contect', response, res);
}
module.exports = contectHandler;