(() => {
    let nav = document.getElementsByClassName('ir_changes')[0];
    console.log(nav)
    window.onscroll = function () {
        //获取滚动距离
        // var top=nav.offsettop;
        var scrollTop = window.scrollY;
        // this.console.log(scrollTop)
        if (scrollTop >= 1200) {
            //达到临界点,给菜单添加类名
            nav.className = 'fix';
        } else {
            nav.className = '';
        }
    }
})();