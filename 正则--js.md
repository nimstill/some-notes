\   反斜杠,对于其后的平常被当作字面量的字符，将其转义为特殊字符。比如，/b/匹配了字符'b'.通过在b的前面放一个反斜杠，即用作/\b/，这个字符变成了一个特殊意义的字符，意思是匹配一个字符边界。
反斜杠也可以将其后的特殊字符，转义为字面量。例如，模式 /a*/ 代表会匹配 0 个或者多个 a。相反，模式 /a\*/ 将 '*' 的特殊性移除，从而可以匹配像 "a*" 这样的字符串。使用 new RegExp("pattern") 的时候不要忘记将 \ 进行转义，因为 \ 在字符串里面也是一个转义字符。

^   匹配输入的开始

$   匹配输入的结束

*   匹配前一个表达式0次或多次。等价于 {0,}

+   匹配前面一个表达式1次或者多次。等价于 {1,}

?   匹配前面一个表达式0次或者1次。等价于 {0,1}
如果紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪的（匹配尽量少的字符），和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反。例如，对 "123abc" 应用 /\d+/ 将会返回 "123"，如果使用 /\d+?/,那么就只会匹配到 "1"。

还可以运用于向前断言，在本表格的 x(?=y) 和 x(?!y) 中有描述。


.   （小数点）匹配除了换行符（\n）之外的任何单个字符。

(x)   匹配 'x' 并且记住匹配项，就像下面的例子展示的那样。括号被称为 捕获括号。

模式 /(foo) (bar) \1 \2/ 中的 '(foo)' 和 '(bar)' 匹配并记住字符串 "foo bar foo bar" 中前两个单词。模式中的 \1 和 \2 匹配字符串的后两个单词。注意 \1、\2、\n 是用在正则表达式的匹配环节。在正则表达式的替换环节，则要使用像 $1、$2、$n 这样的语法，例如，'bar foo'.replace( /(...) (...)/, '$2 $1' )。

x|y   匹配‘x’或者‘y’。

{n}   n是一个正整数，匹配了前面一个字符刚好发生了n次。

比如，/a{2}/不会匹配“candy”中的'a',但是会匹配“caandy”中所有的a，以及“caaandy”中的前两个'a'。

[xyz]   一个字符集合。匹配方括号的中任意字符。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转意，不过转意也是起作用的。

\b   匹配一个词的边界

\B   匹配一个非单词边界

\w   匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]。

css study

