using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace _201230360223
{
    class Program
    {
        static void Main(string[] args)
        {
            Stopwatch timer1 = new Stopwatch();//计时器类
            timer1.Start();//开始计时

            //防伪码长度为10，生成10000个防伪码
            int len;
            int icount;

            len = Convert.ToInt32(Console.ReadLine());
            icount = Convert.ToInt32(Console.ReadLine());

            for (int n = 0; n < icount; n++)
            {
                GetNumber(len);
            }


            timer1.Stop();//停止计时
            double dMilliseconds = timer1.Elapsed.TotalMilliseconds;
            Console.WriteLine("生成个数为：{0}，运行时间为：{1}", icount, dMilliseconds);
            Console.ReadKey();
        }

        protected static void GetNumber(int num1)
        {
            string strTableChar = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";  //34
            StringBuilder ma = new StringBuilder();

            for (int i = 0; i < num1; i++)
            {
                ma.Append(strTableChar[new Random(Guid.NewGuid().GetHashCode()).Next(34)]);
            }
            Console.WriteLine(ma.ToString());
        }
    }
}



//利用Hashtable

HashSet<String> set = new HashSet<string>();
int now = 0;
while (now != icount)
{
    StringBulider code = new StringBulider(size);
    for (int i =0; i< size; i++)
    {
        code.Append(strTableChar[rd.Next(34)]);

    }
    if (set.Contains(code.ToString()) == false)
    {
        now++;
        set.Add(code.ToString());
        Console.WriteLine(code.ToString());
    }
}


//试图优化


        //防伪码长度为10，生成10000个防伪码
int len;
int icount;

len = Convert.ToInt32(Console.ReadLine());
icount = Convert.ToInt32(Console.ReadLine());

for (int n = 0; n < icount; n++)
{
    string strTableChar = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";  //34
    StringBuilder ma = new StringBuilder();

    for (int i = 0; i < len; i++)
    {
        ma.Append(strTableChar[new Random(Guid.NewGuid().GetHashCode()).Next(34)]);
    }
    Console.WriteLine(ma.ToString());
}


int n, i;

for(n = 0; n<len; n++)
{
    string strTableChar = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";  //34
    StringBuilder ma = new StringBuilder();

    for (i = 0; i<icount; i++) 
    {
        ma.Append(strTableChar[new Random(Guid.NewGuid().GetHashCode()).Next(34)]);
        Console.WriteLine(ma.ToString());
    }
}