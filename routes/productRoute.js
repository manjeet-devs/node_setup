function productHandler(req, res) {
  const data = load_Controller('product');;
  setOutput('product', data, res);
}
module.exports = productHandler;