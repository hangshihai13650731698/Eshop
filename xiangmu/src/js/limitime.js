(() => {
    let btnl = document.getElementById('time1');
    let btn2 = document.getElementById('time2');
    let menubox = document.getElementsByClassName("menubox")[0];
    let ii = menubox.getElementsByClassName('ii')[0];

    let step = 0;
    btnl.onclick = () => {
        
        step -= 119;
        startMove(menubox, {
            'left': step
        });
        startMove(ii, {
            'left': -step
        });
        if (step >= -238) {
            step = 0;
        }
    }
    btn2.onclick = () => {
    
        step += step;
        startMove(menubox, {
            'left': step
        });
        startMove(ii, {
            'left': step
        });
        if (step <= 238) {
            step = 0;
        }
        console.log(step)
    }
    
})();