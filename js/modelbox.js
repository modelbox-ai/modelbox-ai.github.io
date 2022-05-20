(() => {
    const adjustScale = () => {
        const scaleRate = {
            'banner': 900 / 3840,
            'procedure': 632 / 1920,
            'for-who': 472 / 1920,
            'dev-sample': 462 / 1920,
            'vedio-tutorial': 412 / 1920,
            'function-list': 720 / 1920,
            'dev-course': 200 / 1920,
			'adjust-list': 800 / 1920,
			'used-case': 781 / 1920
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
        adjustScale();
		init();
    };
	
	// 添加菜单鼠标划入展开，划出收起等事件
	(() => {
		$('#documents').mouseenter(e => {
			$('#documentsItems').css('display', 'block');
		});	
		$('#documents').mouseleave(e => {
			$('#documentsItems').css('display', 'none');
		});	
		$('#documentsItems').mouseenter(e => {
			$('#documentsItems').css('display', 'block');
		});	
		$('#documentsItems').mouseleave(e => {
			$('#documentsItems').css('display', 'none');
		});	
		$('#documentsIcon').mouseenter(e => {
			$('#documentsItems').css('display', 'block');
		});	
		$('#documentsIcon').mouseleave(e => {
			$('#documentsItems').css('display', 'none');
		});	

		$('#codes').mouseenter(e => {
			$('#codesItems').css('display', 'block');
		});	
		$('#codes').mouseleave(e => {
			$('#codesItems').css('display', 'none');
		});	
		$('#codesItems').mouseenter(e => {
			$('#codesItems').css('display', 'block');
		});	
		$('#codesItems').mouseleave(e => {
			$('#codesItems').css('display', 'none');
		});	
		$('#codesIcon').mouseenter(e => {
			$('#codesItems').css('display', 'block');
		});	
		$('#codesIcon').mouseleave(e => {
			$('#codesItems').css('display', 'none');
		});	

		$('#language').mouseenter(e => {
			$('#languageItems').css('display', 'block');
		});	
		$('#language').mouseleave(e => {
			$('#languageItems').css('display', 'none');
		});	
		$('#languageItems').mouseenter(e => {
			$('#languageItems').css('display', 'block');
		});	
		$('#languageItems').mouseleave(e => {
			$('#languageItems').css('display', 'none');
		});	
		$('#languageIcon').mouseenter(e => {
			$('#languageItems').css('display', 'block');
		});	
		$('#languageIcon').mouseleave(e => {
			$('#languageItems').css('display', 'none');
		});	

		$('.navigation-item-page').unbind('click').bind('click', e => {
			navigateClick(e.target);
		});	
		
		// 打开链接
		$('#gotoGithub').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = 'https://www.github.com/modelbox-ai/modelbox.git';
		});
		$('#gotoGitee').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = 'https://www.gitee.com/modelbox/modelbox.git';
		});
		// 使用介绍
		$('#gotoInstruction').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = '/modelbox-book';
		});	
		// 开发规范
		$('#gotoSpecification').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = './pages/standard-book/index.html';
		});
		// 开发文档
		$('#gotoDevelopDoc').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = '/modelbox-book';
		});
		// API
		$('#gotoAPI').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = '/modelbox-book/api/api.html';
		});		
		$('#gotoGettingStart').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = './pages/try-now/index.html';
		});
		$('#community').unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = 'https://marketplace.huaweicloud.com/markets/aihub/article/list';
		});
		$('#footerCourse').unbind('click').bind('click', e => {
			const dom = $('#navigateCourse')[0];
			if(dom) {
				navigateClick(dom);
			}
		});
		// 教程course-page
		let coursePageDom = $('#course-page');
		coursePageDom.unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = 'https://space.bilibili.com/503635713/channel/seriesdetail?sid=2130880&ctype=0';
		});

		// 案例
		let caseDom = $('#case');
		caseDom.unbind('click').bind('click', e => {
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = '/modelbox-book/solution/solution.html';
		});
		
		// 立即使用
		$('#try').unbind('click').bind('click', e => {			
			const newTab = window.open();
			newTab.opener = null;
			newTab.location = '/modelbox-book/solution/car-detect.html';		
		});

		// 拷贝事件
		$('.sample-copy-item').unbind('click').bind('click', e => {
			const value = dockerCommanmd[e.target.getAttribute('copy-type')];
			const input = document.createElement('input');
			document.body.appendChild(input);
			input.setAttribute('value', value);
			input.select();
			if (document.execCommand('copy')) {
				document.execCommand('copy');
				alert('复制成功');
			}
			document.body.removeChild(input);
		});
	})();	
		
	const samples = [
		{
			title: '硬件平台',
			content: [
				{
					label: 'GPU',
					show: true,
					selected: true,
					disabled: false,
					click() {
						samples[2].content[0].disabled = false;
						
						samples[3].content[0].show = true;
						samples[3].content[1].show = true;
						samples[3].content[2].show = true;
						samples[3].content[3].show = false;
						samples[3].content[4].show = false;
						
						samples[3].content[0].selected = true;
						samples[3].content[1].selected = false;
						samples[3].content[2].selected = false;
						samples[3].content[3].selected = false;
						samples[3].content[4].selected = false;	
						
						dockerCommanmd.install = 'docker pull modelbox/modelbo_cuda101_develop';
						$('#dockerCommand').text(dockerCommanmd.install);
						
						init();
					},					
				},
				{
					label: 'Ascend 310',
					show: true,
					selected: false,
					disabled: false,
					click() {						
						samples[2].content[0].selected = false;
						samples[2].content[0].disabled = true;
						samples[2].content[1].selected = true;
						
						samples[3].content[0].show = false;
						samples[3].content[1].show = false;
						samples[3].content[2].show = false;
						samples[3].content[3].show = true;
						samples[3].content[4].show = true;
						
						samples[3].content[0].selected = false;
						samples[3].content[1].selected = false;
						samples[3].content[2].selected = false;
						samples[3].content[3].selected = true;
						samples[3].content[4].selected = false;	
						
						dockerCommanmd.install = 'docker pull modelbox/modelbo_ascend_aarch64_develop';
						$('#dockerCommand').text(dockerCommanmd.install);

						init();
					},
				},
			],
		},
		{
			title: '操作系统',
			content: [
				{
					label: 'Ubuntu',
					show: true,
					selected: true,
					disabled: false,
				},
			],
		},
		{
			title: '系统架构',
			content: [
				{
					label: 'x86',
					show: true,
					selected: true,
					disabled: false,
				},
				{
					label: 'ARM',
					show: true,
					selected: false,
					disabled: false,
				},
			],
		},
		{
			title: '推理架构',
			content: [
				{
					label: 'Tensorflow 2.1.4',
					show: true,
					selected: true,
					disabled: false,
				},
				{
					label: 'PyTorch 1.8.1',
					show: true,
					selected: false,
					disabled: false,			
				},
				{
					label: 'TensorRT 7.1.3',
					show: true,
					selected: false,
					disabled: false,			
				},
				{
					label: 'MindSpore 1.2.0',
					show: false,
					selected: false,
					disabled: false,			
				},
				{
					label: 'ACL C76',
					show: false,
					selected: false,
					disabled: false,				
				},
			],
		},
		{
			title: '版本',
			content: [
				{
					label: '1.0.9',
					show: true,
					selected: true,
					disabled: false,
				},
			],
		},
	];
	
	let dockerCommanmd = {
		install: 'docker pull modelbox/modelbo_cuda101_develop',
		script: '#! /bin/bash \n # ssh map port [modify] \n SSH_MAP_PORT=50011',
	};

	const init = () => {
		const initCasesPage = () => {
			let caseDom = '';
			const getCaseBTNs = btns => {
				let res = '';
				btns.forEach((btn, i) => {
					res += `<button class="${btn.clazz}" style="display: ${btn.show ? '' : 'none'}" id="${btn.id}">${btn.text}</button>`;
				});
				return res;
			};
			const getCaseLabels = labels => {
				let res = '';
				labels.forEach((label, i) => {
					res += `<li>${label}</li>`;
				});
				return res;
			};		
			cases.forEach((item, index) => {
				caseDom += `
						<div style="background-image: url('${item.backgroudImage}'); height: 260px; background-size: cover; padding: 20px 0; margin: 10px 0">
							<div class="width-rate" style="padding: 10px; height: calc(100% - 20px); background-color: #fff; font-size: 14px">
								<div style="float: left; width: 160px; height: 100%; background-image: url('${item.icon}'); background-size: cover"></div>
								<div style="float: left; width: calc(100% - 180px); padding: 0 10px; height: 100%">
									<div style="font-size: 16px; font-weight: bold; height: 21px">${item.title}</div>
									<div class="case-content">${item.content}</div>
									<div style="margin-top: 15px; font-weight: bold; height: 19px">${item.label.title}</div>
									<ul style="height: calc(100% - 165px); overflow-y: auto">
										${getCaseLabels(item.label.items)}
									</ul>
									<div style="height: 32px; margin-top: 8px">
										${getCaseBTNs(item.buttons)}
									</div>
								</div>
							</div>
						</div>		
				`;
			});
			if(caseDom) {
				$('#caseHolder').empty();
				$('#caseHolder').append(caseDom);
			}
			cases.forEach((item, i) => {
				item.buttons.forEach((btn, j) => {
					$('#' + btn.id).unbind('click').bind('click', e => {
						btn.click(e);
					});
				});
			});					
		};
		
		const initSamplePage = () => {
			let sampleDom = '';
			const getSampleBTNs = (btns, index) => {
				let res = '';
				btns.forEach((btn, i) => {
					if(btn.show) {
						res += `<div id="sampleBTN${String(index) + String(i)}" class="sample-btn-item ${btn.selected ? 'selected' : ''} ${btn.disabled ? 'disabled' : ''}">${btn.label}</div>`;
					}
				});
				return res;
			};
			samples.forEach((item, index) => {
				sampleDom += `
						<div class="sample-item" style="height: 40px; margin-top: 30px">
							<div style="float: left; width: 200px; padding-top: 8px; height: calc(100% - 8px)" title="${item.title}" class="my-ellipsis">${item.title}</div>
							${getSampleBTNs(item.content, index)}
						</div>			
				`;
			});
			if(sampleDom) {
				$('#sampleHolder').empty();
				$('#sampleHolder').append(sampleDom);
			}
			samples.forEach((item, i) => {
				item.content.forEach((btn, j) => {
					$('#sampleBTN' + i + j).unbind('click').bind('click', e => {
						if(e.target.className.indexOf('disabled') !== -1) {
							return;
						}
						item.content.forEach(btnItem => btnItem.selected = false);
						btn.selected = true;
						if(btn.click) {
							btn.click(e);
						}
						init();
					});
				});
			});			
		};

		const initNewsPage = () => {
			let newsDom = '';
			news.forEach(item => {
				newsDom += `
						<div class="news-item">
							<div style="float: left; width: 140px; height: calc(100% - 10px)">
								<div style="float: left; height: 100%; font-size: 36px; font-weight: bold">${item.time.day}</div>
								<div style="float: left; font-size: 24px; margin: 6px 8px 0 10px">/</div>
								<div style="float: left; margin-top: 3px">
									<div>${item.time.month}</div>
									<div>${item.time.year}</div>
								</div>
							</div>
							<div style="float: left; width: calc(100% - 180px); padding-left: 30px; height: 100%; border-left: 1px solid #ccc">
								<div style="font-size: 20px; font-weight: bold; color: ${item.title.color || '#000'}" class="me-ellipsis" title="${item.title.text}">${item.title.text}</div>
								<div title="${item.content}" class="news-content">${item.content}</div>
							</div>				
						</div>
				`;
			});
			if(newsDom) {
				$('#news').empty();
				$('#news').append(newsDom);
			}			
		};

		const initCoursePage = () => {
			let courseDom = ''
			let cardLines = 0;
			course.forEach(item => {
				if(item.title) {
					courseDom += `
							<div class="course-card title" style="background-image: url(${item.title.poster}); background-size: cover">
								<div class="course-title-title" style="height: 40px; font-size: 18px; padding: 10px 10px 0 10px">${item.title.label}</div>
								<div class="course-title-content" style="height: calc(100% - 94px); padding: 10px">${item.title.content}</div>
								<div class="course-title-footer" style="height: 24px; font-size: 14px; padding: 0 10px 10px 10px">
									<div style="float: left">${item.title.footer.left}</div>
									<div style="float: right; color: #39f; cursor: pointer">${item.title.footer.right.text}</div>
								</div>
							</div>	
					`;
				}
				let cardCount = 1;
				if(item.content) {
					const getLabelDom = labels => {
						let res = ''
						labels.forEach((label, index) => {
							res += `<span style="border: 1px solid ${label.color}; color: ${label.color}; padding: 0 5px;${index !== 0 ? 'margin-left: 5px' : ''}">${label.text}</span>`;
						});
						return res;
					};
					
					item.content.forEach(course => {
						cardCount ++;
						courseDom += `
							<div class="course-card content" style="box-shadow: 1px 1px 1px 1px #ccc">
								<div class="course-content-post" style="height: 35%; background-image: url(${course.icon}); background-size: cover"></div>
								<div class="course-content-content" style="height: calc(65% - 20px); padding: 10px">
									<div style="height: 24px; font-size: 14px">
										${getLabelDom(course.labels)}
									</div>
									<div style="padding: 5px 0; height: 20px; font-size: 15px; font-weight: bold" class="my-ellipsis">
										${course.title}
									</div>
									<div style="height: 22px; color: #999; font-size: 13px">
										<div style="float: left">${course.date}</div>
										<div style="float: right">${course.address}</div>
									</div>
									<div class="course-content-text" style="height: calc(100% - 119px); margin-bottom: 15px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; word-break: break-all; overflow: hidden; text-overflow: ellipsis">
										${course.content}
									</div>
									<div style="height: 30px;">
										<button class="banner-button-use" style="display: ${course.btn.show ? '' : 'none'}">${course.btn.text}</button>
									</div>
								</div>
							</div>				
						`;
					});
					cardLines += Math.ceil(cardCount / 3);
					cardCount = 3 - (cardCount % 3);
					while(cardCount > 0) {
						courseDom += `<div class="course-card content"></div>`;
						cardCount --;
					}
				}
			});
			if(courseDom) {
				$('#course').empty();
				$('#course').append(courseDom);
			}
			
			if($('.course-card')[0]) {
				const height = Number($('.course-card').css('width').replace('px', ''));
				$('.course-card').css('height', height + 'px');
				$('#course').css('height', ((height + 30) * cardLines) + 'px');
			}
			// 设置课程内容显示的行数
			if($('.course-content-text')[0]) {
				let height = Number($('.course-content-text').css('height').replace('px', ''));
				const oldHeight = height;
				let line = 1;
				if(height) {
					height -= 20;
					while(height > 21) {
						line ++;
						height -= 21;
					}
					$('.course-content-text').css('-webkit-line-clamp', String(line));
					$('.course-content-text').css('height', oldHeight - height + 'px');
					const marginBottom = Number($('.course-content-text').css('margin-bottom').replace('px', ''));
					$('.course-content-text').css('margin-bottom', marginBottom + height + 'px');
				}
			}			
		};
		
		initCoursePage();
		initNewsPage();
		initCasesPage();
		initSamplePage();
	};
	
	init();
	
	const navigateClick = target => {		
		$('.navigation-item-page').removeClass('navigation-selected');
		$(target).addClass('navigation-selected');
		const selected = target.getAttribute('page-id');			
		$('.sample-page').css('display', 'none');
		const navigateClass = ['main-page', 'course-page', 'news-page', 'cases-page'];
		navigateClass.forEach(item => {
			$('.' + item).css('display', item === selected ? 'block' : 'none');
		});
		init();
	};
	
})()
