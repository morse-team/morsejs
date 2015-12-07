// 功能：摩斯编码
// 参数：val为键入值

// settings编码设置
// settings.key 		为传入密文表
// settings.isArray 	输出摩斯值是否数组格式
// settings.separator 	输出摩斯值分隔符

var morse = {};

morse.encode = function (word, settings) {

	// 传参检索及初始默认值
	settings = retrieval(word, settings);

	// 返回编码值
	settings.word = eneach(settings.word, settings.key.entable);

	// 输出为数组或字符格式
	if (settings.isArray == true) {
		return settings.word
	} else {
		return settings.word.join(settings.separator);
	}
}


// 功能：摩斯解码
// 参数：val为键入值

// settings编码设置
// settings.key 		为传入密文表
// settings.separator 	确定摩斯值分隔符

morse.decode = function (word, settings) {

	// 传参检索及初始默认值
	settings = retrieval(word, settings);

	

	// val强制转换为数组
	settings.word = isArray2(settings.word) == true ? settings.word : settings.word.split(settings.separator);

	// 返回解码值
	settings.word = deeach(settings.word, settings.key.detable);

	return settings.word;
}


// 返回解码值－处理函数
function deeach  (word, keymap) {

	// 定义存放解码值
	var content = '';

	// 遍历键入值数组
	for (var i = 0; i < word.length; i++) {
		// 遍历密文表返回解码值
		for (var j in keymap) {
			if(keymap[j].keyval === word[i]) {
				content += keymap[j].val;
			}
		} 
	}
	return content;
}


// 返回编码值－处理函数
function eneach (word, keymap) {

	// 定义存放编码数组
	var content = [];

	// 压缩键入值空格且转换为大写
	word = trim(word).toUpperCase();


	// 遍历键入值字符串
	for (var i = 0; i < word.length; i++) {

		// 遍历密文表返回编码值
		for (var j in keymap) {
			if(keymap[j].keyval === word.substr(i, 1)) {
				content[i] = keymap[j].val;
			}
		} 
	}
	return content;
}


// 传参检索－处理函数
function retrieval(word, settings) {

	// 判断settings是否存在且word传入settings新象中
	if (typeof settings == 'object') {
			settings.word = word;
	} else {
		settings = {
			word: word,
			separator: settings
		}
	}

	// 设置默认参数
	var defaultSettings = {
		key: keymap(),
		separator: '/',
		isArray: false
	}
	$.extend(defaultSettings, settings)
	return defaultSettings

}



// 辅助处理函数

// console.log()简写
function log (val) {
	return console.log(val);
}

// 压缩空格
function trim (str) {
	return str.replace(/(^\s*)|(\s*$)/g, '');
}

// 判断数组
function isArray2 (source) 
{
	return '[object Array]' == Object.prototype.toString.call(source);
}


// 内置摩斯编码表
function keymap () {

//密文表数据结构
// keymap.entable.keyval 	永远为键入值
// keymay.entable.val 		永远为对应返回值

/*keymap = {

	编码表
	entable: {
		[
			val: '..',
			keyval: 'A'
		]
	},

	解码表
	detable: {
		[
			val: 'A',
			keyval: '..'
		]
	}
}*/

var keymap ={entable:[{val : '.-',keyval: 'A',},{val: '-..',keyval: 'B',},{val: '-.-.',keyval: 'C',},{val: '-..',keyval: 'D',},{val: '.',keyval: 'E',},{val: '..-.',keyval: 'F',},{val: '--.',keyval: 'G',},{val: '....',keyval: 'H',},{val: '..',keyval: 'I',},{val: '.---',keyval: 'J',},{val: '-.-',keyval: 'K',},{val: '.-..',keyval: 'L',},{val: '--',keyval: 'M',},{val: '-.',keyval: 'N',},{val: '---',keyval: 'O',},{val: '.--.',keyval: 'P',},{val: '--.-',keyval: 'Q',},{val: '.-.',keyval: 'R',},{val: '...',keyval: 'S',},{val: '-',keyval: 'T',},{val: '..-',keyval: 'U',},{val: '...-',keyval: 'V',},{val: '.--',keyval: 'W',},{val: '-..-',keyval: 'X',},{val: '-.--',keyval: 'Y',},{val: '--..',keyval: 'Z',}]}

	// 生成解码表
	function decryption (table, totable) {
		table.detable = [];
		for (var i in totable) { 
			table.detable[i] = {
				val: totable[i].keyval,
				keyval: totable[i].val,
			}
		}
	}

	decryption(keymap, keymap.entable);

	return keymap
}

