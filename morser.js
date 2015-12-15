var morse = {};

// 功能：摩斯编码
morse.encode = function (word, settings) {

	// 传参检索及初始默认值
	settings = retrieval(word, settings);

	// 返回编码值
	settings.word = getcode(settings.word, settings.key.entable, true);

	// 输出为数组或字符格式
	settings.word = settings.isArray == true ? settings.word : settings.word.join(settings.separator);

	return settings.word
}


// 功能：摩斯解码
morse.decode = function (word, settings) {

	// 传参检索及初始默认值
	settings = retrieval(word, settings);

	// 判断如果为字符强制转换为数组
	settings.word = isArray2(settings.word) == true ? settings.word : settings.word.split(settings.separator);

	// 返回解码值
	settings.word = getcode(settings.word, settings.key.detable, false).join("");

	return settings.word;
}


// 解码器－处理函数
function getcode (word, keymap, state) {

	// 定义存放值的数组
	var content = [];

	// 判断为编码则转换为数组
	if(state == true) {
		var word = trim(word).toUpperCase().split("");
	}

	// 遍历word
	for (var i = 0; i < word.length; i++) {

		// 遍历密文表返回对应值
		for (var j in keymap) {
			if(keymap[j].keyval === word[i]) {
				content[i] = keymap[j].val;
			}
		} 
	}
	return content;
}


// 传参检索－处理函数
function retrieval (word, settings) {

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

	// 扩展对象
	extend(defaultSettings, settings)

	return defaultSettings
}

// 对象扩展
function extend () {
	var options, name,
		i = 1,
		length = arguments.length,
		arger = arguments[0];

	// 循环传入对象
	for ( ; i < length; i++ ) {
		options = arguments[i];

		// 遍历传入对象属性
		for (name in options) {

			// 传入对象属性值未定义则结束此次循环
			if (typeof options[name] == 'undefined') {
				continue;
			}

			// 传入对象复制到被扩展对象中
			arger[name] = options[name];
		} 
	}

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

