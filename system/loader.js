global.load_view = function(path,data){
	const ejs = require('ejs');
	const fs = require('fs');
	let pathname = process.cwd()+'/views/'+path+'.ejs';
	const template = fs.readFileSync(pathname, 'utf8');
	const renderedHTML = ejs.render(template, {data});
	return renderedHTML;
}

global.setOutput = function(path,data,res){
	res.render(path, data);
}

global.load_Controller = function(path, fname="",data=[]){
	const module = require('../controller/'+path);
	if (module[fname] && typeof module[fname] === 'function') {
		return module[fname](data);
	} else if(fname == ""){
		return module.index(data);
	}else{
		throw new Error(`Function "${fname}" does not exist in module "${path}"`);
	}	
}
global.load_model = function(route){
	const connectDB = require('../config/db');
	connectDB();
	//const module  = require(`../model/${route}`);
	return module;
}