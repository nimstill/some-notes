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


