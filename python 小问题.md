#2016.03.31

Python的内存管理主要有三种机制：引用计数机制、垃圾回收机制和内存池机制。
lambda 表达式，通常是在需要一个函数，但是又不想费神去命名一个函数的场合下使用，也就是指匿名函数

赋值（=），就是创建了对象的一个新的引用，修改其中任意一个变量都会影响到另一个。



浅拷贝：创建一个新的对象，但它包含的是对原始对象中包含项的引用（如果用引用的方式修改其中一个对象，另外一个也会修改改变）{1，完全切片方法；2，工厂函数，如list()；3，copy模块的copy()函数}



深拷贝：创建一个新的对象，并且递归的复制它所包含的对象（修改其中一个，另外一个不会改变）{copy模块的deep.deepcopy()函数}

执行try下的语句，如果引发异常，则执行过程会跳到except语句。对每个except分支顺序尝试执行，如果引发的异常与except中的异常组匹配，执行相应的语句。如果所有的except都不匹配，则异常会传递到下一个调用本代码的最高层try代码中。

re模块中match(pattern，string [，flags])，检查string的开头是否与pattern匹配。



re模块中research(pattern，string [，flags])，在string搜索pattern的第一个匹配值。

试图访问一个超过列表索引值的成员将导致 IndexError（比如访问以上列表的 list[10]）。尽管如此，试图访问一个列表的以超出列表成员数作为开始索引的切片将不会导致 IndexError，并且将仅仅返回一个空列表。



一个讨厌的小问题是它会导致出现 bug ，并且这个问题是难以追踪的，因为它在运行时不会引发错误。

