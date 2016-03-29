#2016.3.29   晚

今天花了挺长的时间来打算搞一个app
由于比较喜欢python，所以有想法用python来写一个app，结果，晚上发现还要有linux环境，哎，实在懒得装，还是用react或angular吧，前端发展太快，总是感觉在追逐，好心累，说一下用python遇到的坑

**https://kivy.org/docs/installation/installation-windows.html**


Now that python is installed, open the Command line and make sure python is available by typing python --version. Then, do the following to install.

    Ensure you have the latest pip and wheel:

    `python -m pip install --upgrade pip wheel setuptools`

    Install the dependencies (skip gstreamer (~90MB) if not needed, see Kivy’s dependencies):

    `python -m pip install docutils pygments pypiwin32 kivy.deps.sdl2 kivy.deps.glew \`
    `kivy.deps.gstreamer --extra-index-url https://kivy.org/downloads/packages/simple/`

    Install kivy:

    `python -m pip install kivy`

---

现实是type2

This has been fixed. It was a problem with the website that served the gstreamer wheels. Also, we enabled https for kivy.org so the command to use is now 

    `python -m pip install docutils pygments pypiwin32 kivy.deps.sdl2 kivy.deps.glew kivy.deps.gstreamer --extra-index-url https://kivy.org/downloads/packages/simple/`


点开链接，可以有比较清晰的介绍，其实也可以模拟，但在打包成apk时会有一些问题，不太方便，官方的代码或许在某些环境不太适应，所以有了type2 这个点


###实践证明，谷歌是个好东西，坚持学习，加油

**fyi,安装软件路径不要用中文，会有问题！！！**

![GitHub Mark](http://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png)

