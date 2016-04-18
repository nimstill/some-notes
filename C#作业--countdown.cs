using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace countdown
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime nowTime = DateTime.Now;
            Console.WriteLine("现在时间：" + nowTime);

            Console.WriteLine("请输入倒计时的秒数（0-60），按0退出：");
            int Num = Convert.ToInt32(Console.ReadLine());

            if (Num <= 60 && Num >= 0)
            {
                for (int i = Num; i > 0; i--)
                {
                    int n = i;
                    --n;
                    Thread.Sleep(1000);

                    Console.WriteLine("倒计时中，还剩下" + n + "秒");
                }
                
            }
            else
            {
                Console.WriteLine("请输入正确的秒数数字（0-60）");
            }



            Console.ReadKey();
        }
    }
}
