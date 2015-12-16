# MORSE API开发者文档 
通过该文档可以快速查阅MORSE API使用规则。   
**索引**  

* [morse.encode](#encode)
* [morse.decode](#decode)

## | morse.encode <a href="#top" name="encode"></a>
**- 描述：** *字符串编码为摩尔数*   
**- 参数： morse.encode( word, [ settings ] )**

+ **word**
> 类型：[String]()   
键入字符串    

+ **settings**    
> 类型：[Object]() or [String]()    
组包含摩尔编码设置集合。支持的设置:

	- separator (default: `'/'`)    
	> 类型：[String]()   
	设置输出摩尔值的分隔符`如果isArray设为ture，separator并无意义`  

	- isArray (default: `false`)    
	> 类型：[Boolean]()    
	输出摩尔值的数据类型，ture为输出Array,false为输出String。   

	- key   
	> 类型：[Object]()   
	若摩尔需要加密，则填入加密表，默认为基本的摩尔编码解码。

**- 基本用法：**

````js
morse.encode('morse') // --/---/.-./.../.
````
设置输出摩尔值为`Array`型
````js
morse.encode('morse', {
	isArray: true,
})//['--', '---', '.-.', '...', '.']
````

若`isArray`设为`ture`，设置`separator`并无意义
````js
morse.encode('morse', {
	separator:'/',
	isArray: true,
})//['--', '---', '.-.', '...', '.']
````

若摩尔需要加密，`key`传入对应的密文表
````js
morse.encode('morse', {
	separator:'/',
	isArray: false,
	key: keyMay
}) // --/---/.-./.../.
````


无加密的摩尔，可以在settings直接填入分隔符
````js
morse.encode('morse', '|') //  --|---|.-.|...|.
````

## | morse.decode  <a href="#top" name="decode"></a>

**- 描述：** *摩尔数解码为字符串*   
**- 参数：morse.decode( word, [ settings ] )**   

+ **word**
> 类型：[String]() or [Array]()   
键入的摩尔数    

+ **settings**    
> 类型：[Object]() or [String]()    
组包含摩尔解码设置集合。支持的设置:

	- separator (default: `'/'`)    
	> 类型：[String]()   
	若键入摩尔值为`String`分隔不为`'/'`，请在`separator`设置摩尔值的分隔符，如果为`Array`可不设置。  

	- key   
	> 类型：[Object]()   
	若摩尔需要加密，则填入加密表，默认为基本的摩尔编码解码。 

**- 基本用法：**

````js
morse.decode('--/---/.-./.../.') //  morse
````

设置键入摩尔分隔符
````js
morse.decode('--|---|.-.|...|.', {
	separator: '|',
}) // morse
````

`注意:`键入摩尔分隔符不为`'/'`时，需要在`separator`属性设置分隔符，若不设置对应的`separator`，或`separator`与键入摩尔分隔符不匹配则会输出`空`
````js
morse.decode('--|---|.-.|...|.', {
	separator: '/',
   	key: keyMap
}) // 

morse.decode('--|---|.-.|...|.', {
	key: keyMap
}) // 

````

若摩尔需要加密，`key`传入对应的密文表
````js
morse.decode('--/---/.-./.../.', {
	key: keyMap
}) // 
````

可以在`word`输入`Array`型
````js
morse.decode(['--', '---', '.-.', '...', '.']) //  morse
````

无加密的摩尔，可以在settings直接填入分隔符
````js
morse.decode('--|---|.-.|...|.', '|') 
````