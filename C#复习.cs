using System;
namespace ConsoleApplicationExample
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 1;
            Console.WriteLine("The first is:{0}");
            Console.Write("Please enter your name: ");
            string strName = Console.ReadLine();
            Console.WriteLine("Hello" + strName + "!");
            HelloName helloName = new HelloName();
            HelloMe HelloMe = new HelloMe();
            helloMe.Welcome();
            Console.ReadLine();
        }
    }
}


long k = 5000;
int i = (int)k;

int i = 123;
object o = i;
int k = (int)o;

Console.Write();
Console.WriteLine();
Console.ReadKey();
Console.ReadLine();

int[] myint={1,2,3};
foreach (int test in myint)
{
    test++;
    Console.WriteLine(test);
}

public int IndexOfAny(char[] anyOf)

enum days {Mon, Tue, Wed, Thu, Fri, Sat}

public class MyClass<T>
{
    public T MyProp {get; set;}
    public void Print()
    {
        Console.WriteLine(MyProp);
    }
}

public class Program
{
    public static int j = 20; //ziduan
    public static void Main()
    {
        int j = 30;
        Console.WriteLine(j);
        Console.WriteLine(Program.j);
        Console.ReadLine();
    }
}


ColorDialog colorDialog() = new ColorDialog();
if (colorDig.showDialog() == DialogResult.OK)
{
    textBox1.ForeColor = colorDig.Color;
}

ShowReadOnly multiselect
filename  filter

ExecuteNonQuery  ExecuteReader
ExecuteScaler() 