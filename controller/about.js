exports.index = () => {
	const data = {};
	data['title'] = 'My Node.js App';
	data['name'] = 'this is a about page';
	data['header'] = load_Controller('common/header','index');
	data['footer'] = load_Controller('common/footer','index');
	return data;
}

exports.newfunction = () => {
	data = {};
	return data;
}
