using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace calculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        float temp = -1;
        int method = 0;

        public void addNum(int num)
        {
            textBox1.Text = textBox1.Text + num.ToString();
        }
        //8
        private void button14_Click(object sender, EventArgs e)
        {
            addNum(8);
        }
        //9
        private void button3_Click(object sender, EventArgs e)
        {
            addNum(9);
        }
        // /
        private void button4_Click(object sender, EventArgs e)
        {
            method = 4; //jisuangfangshi biaozhiwei
            temp = Convert.ToInt64(textBox1.Text);
            textBox1.Text = "";
        }
        //7
        private void button1_Click(object sender, EventArgs e)
        {
            addNum(7);
        }
        //CE
        private void button5_Click(object sender, EventArgs e)
        {
            textBox1.Text = "0";
            temp = 0;
            method = 0;
        }
        // 4
        private void button9_Click(object sender, EventArgs e)
        {
            addNum(4);
        }
        //5
        private void button8_Click(object sender, EventArgs e)
        {
            addNum(5);
        }
        // 6
        private void button7_Click(object sender, EventArgs e)
        {
            addNum(6);
        }
        //*
        private void button6_Click(object sender, EventArgs e)
        {
            method = 3;
            temp = Convert.ToInt64(textBox1.Text);
            textBox1.Text = "";
        }
        // 1
        private void button13_Click(object sender, EventArgs e)
        {
            addNum(1);
        }
        // 2
        private void button12_Click(object sender, EventArgs e)
        {
            addNum(2);
        }
        // 3
        private void button11_Click(object sender, EventArgs e)
        {
            addNum(3);
        }
        // - 
        private void button10_Click(object sender, EventArgs e)
        {
            method = 2;
            temp = Convert.ToInt64(textBox1.Text);
            textBox1.Text = "";
        }
          // 0
        private void button17_Click(object sender, EventArgs e)
        {
            addNum(0);
        }
        //。 
        private void button16_Click(object sender, EventArgs e)
        {

        }
        // +
        private void button15_Click(object sender, EventArgs e)
        {
            method = 1;
            temp = Convert.ToInt64(textBox1.Text);
            textBox1.Text = "";
        }
        //=
        private void button14_Click_1(object sender, EventArgs e)
        {
            float temp1 = Convert.ToInt64(textBox1.Text); //记录第二个数字
            switch (method)
            {
                case 1:
                    textBox1.Text = (temp1 + temp).ToString();
                    break;
                case 2:
                    textBox1.Text = (temp - temp1).ToString();
                    break;
                case 3:
                    textBox1.Text = (temp1 * temp).ToString();
                    break;
                case 4:
                    textBox1.Text = (temp / temp1).ToString();
                    break;

            }
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
