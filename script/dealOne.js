var argv = process.argv.slice(2);
var childP = require('child_process');
var fs = require('fs');
var request = require('request');
var url = require('url');

var path1 = "http://www.iplaymtg.com/app/api/magic.php?action=getMagicCard&id=";
var path2 = "/home/meng/Documents/workspace/gamer/data";

function fetchOne(id){
	var ls = childP.spawn('curl', [path1 + id]);
	var getData = "";
	ls.stdout.on('data', function (data){
		console.log(data.toString());
		getData += data.toString();
	});
	ls.stderr.on('data', function (data){
		console.log("err:" + id + ":" + data.toString());
	});
	ls.on('exit', function (code){
		var obj = JSON.parse(getData.toString());
		if (obj.card.id) {
			dealOne(obj.card);
		};
		if(++id <= parseInt(argv[1])){
			fetchOne(id);
		}else{
			console.log("over");
		}
	});
}

function dealOne(obj){
	//console.log(JSON.stringify(obj));

	var imgPath = url.parse(obj.img).path;
	var fileStr = (JSON.stringify(imgPath)).split('/');
	var filePath = fileStr[fileStr.length - 2];
	request(obj.img).pipe(fs.createWriteStream(path2 + "/" + filePath + "/" + obj.eName + ".full.jpg"));
	// request(obj.img, function(err, response, body){
	// 	console.log("err:" + err);
	// 	console.log("res:" + JSON.stringify(response));
	// 	console.log("body:" + body);
	// });
}

fetchOne(parseInt(argv[0]));