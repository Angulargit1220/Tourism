//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var productSchema=new mongoose.Schema({
      Name : String,
	  Email: String,
	  Phone: Number,
	  Comment: String,
	  val: String,
	  week: Object,
	  Day: Object
	  });
	  
  module.exports=restful.model('contactusForm',	productSchema);  
	  