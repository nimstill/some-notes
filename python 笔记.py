为了不让内部属性不被外部访问，在属性的名称前加上两个下划线__，这样就变成了一个私有变量(private)，
注意，不能直接访问不代表一定不能访问，事实上，加双下划线后Python就会将其改名为_class名__name，
所以还是可以这样来访问这个‘私有’变量。

对于静态语言，如果要求传入一个class类型的对象，那么传入的对象必须是class类型或者其子类，
否则将无法调用class中的方法，而Python这样的动态语言有‘鸭子类型’一说，即不一定要传入class类型或其子类，
而只要保证传入的对象中有要使用的方法即可。

如果想要限制实例可以绑定的属性，那么在定义class时定义一个__slots__变量即可

class Student(object):
    __slots__ = ('name','age')


注意，__slots__限制的属性对当前类实例起完全限制作用，且与子类共同定义其__slots__，
也就是说子类可以定义自己的__slots__，子类实例允许定义的属性就是自身的__slots__加上父类的__slots__，即并集。

@ property装饰器可以使一个getter方法变成属性，如果方法名为me，那么@me.setter装饰器则可使一个setter方法变成属性。
这样可以使代码更简短，同时可对参数进行必要的检查。

通过多重继承，可使子类拥有多个父类的所有功能。
在类中__call__方法可使实例对象像函数那样直接调用，作用即是该方法定义的过程。

ORM(Object Relational Mapping 对象关系映射)，就是把关系数据库的一行映射为一个对象，也就是一个类对应一个表。
ORM的实现需要通过metaclass元类修改类的定义。元类可以改变类创建时的行为。


def login():
    '''登录知乎'''
    username = '' #ziji
    password = ''
    cap_content = _session.get(CAPTURE_URL).cap_content
    cap_file = open('cap,gif', 'wb')
    cap_file.write(cap_content)
    cap_file.close()
    captcha = raw_input('capture:')



在 Python 3 中，/ 操作符是做浮点除法，而 // 是做整除（即商没有余数，
比如 10 // 3 其结果就为 3，余数会被截除掉，而 (-7) // 3 的结果却是 -3。
这个算法与其它很多编程语言不一样，需要注意，它们的整除运算会向0的方向取值。
而在 Python 2 中，/ 就是整除，即和 Python 3 中的 // 操作符一样，）

list = ['a', 'b', 'c', 'd', 'e']
print list[10:]

以上代码将输出 []，并且不会导致一个 IndexError。

新的默认列表仅仅只在函数被定义时创建一次。随后当 extendList 没有被指定的列表参数调用的时候，其使用的是同一个列表。
这就是为什么当函数被定义的时候，表达式是用默认参数被计算，而不是它被调用的时候。

def extendList(val, list=[]):
    list.append(val)
    return list
 
list1 = extendList(10)
list2 = extendList(123,[])
list3 = extendList('a')
 
print "list1 = %s" % list1
print "list2 = %s" % list2
print "list3 = %s" % list3

anwser
list1 = [10, 'a']
list2 = [123]
list3 = [10, 'a']

better

def extendList(val, list=None):
    if list is None:
        list = []
    list.append(val)
    return list



