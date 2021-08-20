$('.test');
(() => {	
    const adjustScale = () => {
        const scaleRate = {
            'banner': 450 / 1920,
            'advantage': 632 / 1920,
            'for-who': 472 / 1920,
            'dev-sample': 462 / 1920,
            'vedio-tutorial': 412 / 1920,
            'function-list': 720 / 1920,
            'dev-course': 200 / 1920
        };
        const windowWidth = window.outerWidth;
        for(let key in scaleRate) {
            const dom = $('.' + key);
            if(dom[0]) {
                dom.height(scaleRate[key] * windowWidth + 'px');
            }
        }
    };
    adjustScale();
    window.onresize = () => {
        // resize后要重新计算每个模块的offsetTop，渲染有时延
        setTimeout(bindNavigateClick, 500);
        adjustScale();
    };

    const navigationSelected = (() => {
        let indexScroll = {};
        let selected = 'advantage';

        const changeSelected = newSelected => {
            $(indexScroll[selected].dom).removeClass('navigation-selected');
            $(indexScroll[newSelected].dom).addClass('navigation-selected');
            selected = newSelected;
        };

        const initIndex = (id, dom) => {
			const dom1 = $("#" + id)[0];
			if(dom1) {
				const value = dom1.offsetTop - 50
				indexScroll[id] = {
					dom,
					offset: value
				};
			}
        };

        const scrolling = offsetTop => {
            const scrollHeight = $(document).height();
            const windowHeight = window.innerHeight;
            if(scrollHeight - offsetTop - windowHeight < 50){
                // 到底部导航显示到【开发教程】
                changeSelected('devCourse');
                return;
            }

            let nearest = '';
            let distance = 9999999;
            for(let key in indexScroll) {
                if(Math.abs(offsetTop - indexScroll[key].offset) < distance) {
                    nearest = key;
                    distance = Math.abs(offsetTop - indexScroll[key].offset);
                }
            }
            if(nearest !== selected) {
                changeSelected(nearest);
            }
        };

        return {
            initIndex: initIndex,
            scrolling: scrolling
        }
    })();

    const bindNavigateClick = () => {
        [...$('.navigation').children('div')].forEach(item => {
			const objId = $(item).attr('obj-id');
			if(objId) {
				navigationSelected.initIndex(objId, item);
				$(item).unbind('click').bind('click', e => {
					const id = $(e.target).attr('obj-id');
					const offsetTop = $("#" + id)[0].offsetTop - 50;    //50是导航的宽度
					$('html,body').animate({scrollTop: offsetTop}, 300);
				});	
			}
        });
    };
    bindNavigateClick();

    $(document).scroll(function() {
        const offsetTop = $(document).scrollTop();  //滚动高度
        navigationSelected.scrolling(offsetTop);
    });
	
	$('#gotoGithub').unbind('click').bind('click', e => {
		const newTab = window.open();
		newTab.opener = null;
		newTab.location = 'https://github.com/modelbox-ai/modelbox-ai.github.io';
	});
	
	$('#gettingStart').unbind('click').bind('click', e => {
		const newTab = window.open();
		newTab.opener = null;
		newTab.location = './pages/getting-start/index.html';
	});

})()