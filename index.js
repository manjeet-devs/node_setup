const aboutHandler = require('./routes/aboutRoute');
const homeHandler = require('./routes/homeRoute');
const productHandler = require('./routes/productRoute');
const contectHandler = require('./routes/contectRoute');
const searchHandler = require('./routes/searchRoute');
require('./system/loader');
require('./global');
function index(app) {
	app.get('/', homeHandler);
	app.get('/about', aboutHandler);
	app.get('/product', productHandler);
	app.get('/contect', contectHandler);
	app.get('/search', searchHandler);
	// Catch-all for 404 errors
	app.use((req, res) => {
		const data = load_Controller('not_found');
		//res.render('not_found',data);
		res.status(404).send(data);
	});

}
module.exports = { index };