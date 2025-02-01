exports.index = () => {
	const data = {};
	data['title'] = 'My Node.js App';
	data['name'] = 'this is a home page';
	data['header'] = load_Controller('common/header');
	data['footer'] = load_Controller('common/footer');
	return data;
}
