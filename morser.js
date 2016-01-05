;(function (window) {

var morse = {};

// 摩尔表生成
morse.data = maptable();

// 功能：摩斯编码
morse.encode = function (word, settings) {
	settings = retrieval(word, settings);
	settings.word = getcode(settings.word, settings.key.entable, true);
	settings.word = settings.isArray == true ? settings.word : settings.word.join(settings.separator);
	return settings.word
}

// 功能：摩斯解码
morse.decode = function (word, settings) {
	settings = retrieval(word, settings);
	settings.word = isArray2(settings.word) == true ? settings.word : settings.word.split(settings.separator);
	settings.word = getcode(settings.word, settings.key.detable, false).join("");
	return settings.word;
}

// 解码器－处理函数
function getcode (word, keymap, state) {
	var content = [];
	word = state == true ? trim(word).toUpperCase().split("") : word;
	for (var key in word) {
		content.push(keymap[word[key]])
	}
	return content;
}


// 传参检索－处理函数
function retrieval (word, settings) {
	if (typeof settings == 'object') {
		settings.word = word;
	} else {
		settings = {
			word: word,
			separator: settings
		}
	}
	var defaultSettings = {
		key: morse.data,
		separator: '/',
		isArray: false
	}
	extend(defaultSettings, settings)
	return defaultSettings
}

// 对象扩展
function extend () {
	var options, name,
	i = 1,
	length = arguments.length,
	arger = arguments[0];
	for ( ; i < length; i++ ) {
		options = arguments[i];
		for (name in options) {
			if (typeof options[name] == 'undefined') {
				continue;
			}
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

// 摩斯编码表生成函数
function maptable() {
	var data={entable:{A:".-",B:"-..",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."},detable:{}};

// 生成解码表
	var t;
	for (var i in data.entable) {
		t = data.entable[i];
		data.detable[t] = i;
	}
	return data;
}
window.morse = morse;
})(window)




