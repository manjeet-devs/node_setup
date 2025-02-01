function searchHandler(req, res , next) {
	globData['q'] = req.query.q;
	const data = load_Controller('search');
	if(req.query.q == 'product'){
		setOutput('product', data, res);
	}else{
		const response = load_Controller('not_found');
		res.status(404).send(response);
	}
	
      }
      module.exports = searchHandler;