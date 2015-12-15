# MORSE API使用说明    

## morse.encode    
*描述：把字符编译为摩尔数*   
````js
morse.encode(word, [settings])
````
+ **word**
>类型：[String]()    
为键入被编译的字符    
+ **settings**    
	>类型：[Object]() or [String]()    
- 组包含编译摩尔设置集合。支持的设置:
	- **separator**    
	>类型：[String]()   
	设置输出摩尔值的分隔符
	- **isArray** (default: `false`)    
	>类型：[Boolean]()    
	设置输出摩尔值的分隔符
