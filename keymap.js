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
var keyMap = keymap();