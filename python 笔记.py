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



class A(object):
    def foo(self, x):
        print("executing foo(%s,%s)" % (self))
        print('self:', self)
    @classmethod
    def class_foo(cls,x):
        print("executing class_foo(%s,%s)" % (cls, x))
        print('cls:', cls)
    @staticmethod
    def static_foo(x):
        print("executing static_foo(%s)" % x)


a = A()
print(a.foo(1))
print(a.class_foo(1))
print(a.static_foo(1))

#迭代器和生成器

#生成器：带有yield的函数不再是一个普通函数，而是一个生成器。当函数被调用时，返回一个生成器对象。不像一般函数在生成值后退出，生成器函数在生成值后会自动挂起并暂停他们的执行状态。

#迭代器：是访问集合元素的一种方式，从集合的第一个元素开始访问，直到所有元素被访问结束。其优点是不需要事先准备好整个迭代过程中的所有元素，仅在迭代到某个元素时才开始计算该元素。适合遍历比较巨大的集合。__iter__()：方法返回迭代器本身， __next__()：方法用于返回容器中下一个元素或数据。

'''diedaiqi'''
print('for x in iter([1,2,3,4,5]):')
for x in iter([1,2,3,4,5]):
    print(x)

'''shengchengqi'''

def myyield(n):
    while n>0:
        print("start...")
        yield n
        print ('done one...')
        n -= 1
for i in myyield(4):
    print('bianli:', i)


#闭包可以实现先将一个参数传递给一个函数，而并不立即执行，以达到延迟求值的目的。满足以下三个条件：必须有一个内嵌函数；内嵌函数必须引用外部函数中变量；外部函数返回值必须是内嵌函数。

def delay_fun(x, y):
    def caculator():
        return x+y
    return calculator

print('fanhuiqiuhehanshu...')

msum = delay_fun(3, 4)
print('diaoyongqiuhe:')
print(msum())

#*args表示任何多个无名参数，它是一个元组，**kwargs表示关键字参数，它是一个字典。同时使用*args和**kwargs时，必须*args在**kwargs之前。

#@property负责把一个方法变成属性调用。在对实例操作时，不暴露接口，而是通过getter和setter方法实现。


class Student(object):
    @property
    def score(self):
        return self.score

    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an intager')
        if value<0 or value>100:
            raise ValueError('score must between 0~100!')
        self.score = value
s = Student()
s.score = 60
print(s.core)



Descriptors 

descr__get__(self, obj, objtype=None) --> value

descr.__set__(self, pbj, value) --> None

descr.delete__(self, obj) --> None


class RevealAccess(object):
    def __get__(self, obj, objtype):
        print('self in revealAccess: {}'.format(self))
        print('self: {}\nobjtype: {}'.format(self, obj, obtype))


class MyClass(object):
    x = RevealAccess()
    def test(self):
        print('self in MyClass: {}'.format(self))

conditions = (check_size, check_color, check_tone, check_flavor)
return next(filter(None, map(lambda f: f(), conditions)), None)

class A:
    def __init__(self, **kwargs):
        for key in kwargs:
            setattr(self, key, kwargs[key])

a = A(l=1,d=2)

import decorator
import inspect
import sys

@decorator.decorator
def simple_init(func, self, *args, **kws):
    @simple_init
    def __init__(self,a,b,...,z)
    dosomething()

    def __init__(self,a,b,...,z)
    self.a = a
    self.b = b
    ...
    self.z = z




进程:每个逻辑控制流都是一个进程,由内核来调度和维护.因为进程有独立的虚拟地址空间,想要和其他控制流通信必须依靠显示的进程间通信,即我们所说的IPC机制

线程:线程应该是我们最为熟知的.它本质是运行在一个单一进程上下文中的逻辑流,由内核进行调度.
I/O多路复用:应用程序在一个进程的上下文中显式地调度他们自己的逻辑流.逻辑流被模型化为状态机,数据到达文件描述符之后,主程序显式地从一个状态转换为另一个状态.因为程序都是以一个单独的进程,所以所有的流都共享同一个地址空间.基本的思路就是使用select函数要求内核挂起进程,只有一个或多个I/O事件发生后,才将控制权返回给应用程序


新建:使用线程的第一步就是创建线程,创建后的线程只是进入可执行的状态,也就是Runnable
Runnable:进入此状态的线程还并未开始运行,一旦CPU分配时间片给这个线程后,该线程才正式的开始运行
Running:线程正式开始运行,在运行过程中线程可能会进入阻塞的状态,即Blocked
Blocked:在该状态下,线程暂停运行,解除阻塞后,线程会进入Runnable状态,等待CPU再次分配时间片给它
结束:线程方法执行完毕或者因为异常终止返回

import threading

#具体做啥事,写在函数中
def run(number):
    print(threading.currentThread().getName() + '\n')
    print(number)

if __name__ == '__main__':
    for i in range(10):
        #注意这,开始咯,指明具体的方法和方法需要的参数
        my_thread = threading.Thread(target=run, args=(i,))
        #一定不要忘记
        my_thread.start()



