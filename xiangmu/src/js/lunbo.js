function lunbotuOne(opt) {

    //默认参数
    var defaulOption = {
        // iw: 500, //宽度(可选)
        ih: 300, //高度(可选)
        time: 2, //图片切换时间（可选）
        lebtn: 400, //左右按钮位置
        ribtn: 400,
    }

    //有配置参数用配置参数，没有配置就用默认参数
    Object.assign(defaulOption, opt) ////用默认参数 ：defaultOpt
    /*
            需求：轮播图
                *渲染数据
                * 所有的图片层级放在可视区，通过改变层级显示图片
                * 焦点(幻灯片)动态生成（根据图片的个数来创建）
                * 开启定时器：自动轮播
                * 点击左右按钮：切换到上下张
                * 点击焦点：切换到对应的图片
       */

    var box = document.getElementById(defaulOption.ele);
    var imglist = box.getElementsByClassName('imglist')[0];
    var list = box.getElementsByClassName('list')[0];
    var light = box.getElementsByClassName('light')[0];
    var posibtn = box.getElementsByClassName('posibtn')[0];

    //设置尺寸
    box.style.width = defaulOption.iw + 'px';
    box.style.height = defaulOption.ih + 'px';

    // *渲染数据
    var html = '';
    var str = '';
    for (var i = 0; i < defaulOption.imgurl.length; i++) {
        html += `
                        <li><img src="${defaulOption.imgurl[i]}" alt=""></li>
                   `;
        str += `
                        <span>${i+1}</span>
                   `;
    }
    list.innerHTML = html;
    light.innerHTML = str;

    var bigLi = document.querySelectorAll('.list li');
    console.log(bigLi)
    var iw = bigLi[0].offsetWidth; //获取轮播可视区宽度
    bigLi[0].style = 'z-index:1;';

    var timer = null; //设置一个空的定时器
    var now = 0; //可视区里面正在播放的图片的下标
    var zIndex = 2;
    var yijinav=document.getElementsByClassName('yijinav')[0];
    var indexbox=document.getElementsByClassName('indexbox')[0];
    var arr=['36,57,140','77,101,127','3,7,10','217,217,217','255,22,127','218,47,66']
    // console.log(indexbox)
    // * 开启定时器：自动轮播
    //2.开启定时器自动轮播
    timer = setInterval(next, defaulOption.time * 1000);

    function next() {

        now++;
        tab();
        lightby();
        indexbox.style.background=`rgb(${arr[now]})`;
        // return now;
        yijinav.style.background=`rgb(${arr[now]})`;
     
    }
    // console.log(now)
    function prev() {
        now--;
        tab();
        lightby();
    }

    function tab() { //上一张
        if (now > bigLi.length - 1) { //now到了最后一张回到第一张
            now = 0;
        } else if (now < 0) {
            now = bigLi.length - 1;
        }

        if (zIndex > bigLi.length) { //层级到了临界点就归零
            zIndex = 1;
            for (let ele of bigLi) {
                ele.style.zIndex = 0;
            }
        }
        bigLi[now].style.zIndex = zIndex++;
        bigLi[now].style.opacity = 0; //像手风琴效果：高度变化
        startMove(bigLi[now], {
            'opacity': 100
        });

        lightby();
    }
    //第一个焦点高亮
    var spans = document.querySelectorAll('.light span')

    spans[0].className = 'active';
    //焦点跟随
    function lightby() {
        //排他
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        spans[now].className = 'active'
    }
    // var prevbtn = document.querySelector('#prev');
    // var nextbtn = document.querySelector('#next');
    // prevbtn.style.left = defaulOption.lebtn + 'px';
    // nextbtn.style.right = defaulOption.ribtn + 'px';

    // console.log(prevbtn)   // // * 点击左右按钮：切换到上下张

    box.onmouseover = function () { //鼠标划入，关闭定时器
        clearInterval(timer);
    }
    box.onmouseout = function () { //鼠标滑出,又开启定时器
        timer = setInterval(next, defaulOption.time * 1000)


    }

    //点击焦点时也可以切换图片
    // console.log(spans)
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].onmouseover = function () {

            now = this.index; //需要重新给now赋值为当前点击的焦点的下标
            tab();
            lightby(); //焦点跟随
            indexbox.style.background=`rgb(${arr[now]})`;
            yijinav.style.background=`rgb(${arr[now]})`;
        }
    }
   
}