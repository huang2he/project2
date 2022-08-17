/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
      $commentContainerFormControls = $(".comment-form-controls");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });
  $(".happening-tabs a").on('click',function(){
    var h=$(this).attr('href');
    $(".happening-tabs a").removeClass('active');
    $(this).addClass('active');
    $('.happening-content .category .section').css('display','none');
    $('#'+h.split('#')[1]).css('display','inline-block');
  });
	setTimeout(function() {
		var menuTop = jQuery(".header-inner .logo").offset().top;
		if(100 > menuTop) {
			jQuery(".nav-menu-1>li").addClass("no-edit");
		} else {
			jQuery(".nav-menu-1>li").addClass("has-edit");
		}
	},10);
	jQuery("zd-hc-resizer").click( function() {
		setTimeout(function() {
			var navbarH = jQuery("#navbar-container").height();
			if(navbarH > 10) {
				jQuery(".nav-menu-1>li").addClass("has-edit");
			} else {
				jQuery(".nav-menu-1>li").removeClass("has-edit");
			}
		},10)
	});
	$('.globeIt').click(function(e){
			var s=$(this).attr('data-show');
			if(s==0)
			{
				$('.nav-menu-global').show();
				$(this).attr('data-show',1).addClass('nav-menu-global-show');
			}
			else
			{
				$('.nav-menu-global').hide();
				$(this).attr('data-show',0).removeClass('nav-menu-global-show');
			}
			e.stopPropagation();
		});
		$('.searchIt').click(function(e){
			var s=$(this).attr('data-show');
			if(s==0)
			{
				$('.nav-menu-search').show();
        $('#csearch').focus();
				$(this).attr('data-show',1).addClass('nav-menu-search-show');
			}
			else
			{
				$('.nav-menu-search').hide();
				$(this).attr('data-show',0).removeClass('nav-menu-search-show');
			}
			e.stopPropagation();
		})
		$(document).on('click',function(e){
			var t=$(e.target).closest('.globeIt.nav-menu-global-show');
			if(!t.length)
			{
				$('.nav-menu-global').hide();
				$('.globeIt').attr('data-show',0).removeClass('nav-menu-global-show');
			}
			var s=$(e.target).closest('.searchIt.nav-menu-search-show'),sinput=$(e.target).closest('.nav-menu-search');
			if(!s.length&&!sinput.length)
			{
				$('.nav-menu-search').hide();
				$('.searchIt').attr('data-show',0).removeClass('nav-menu-search-show');
			}
		});
		$('#csearch').bind('keypress',function(e){
			if(e.keyCode==13)
			{
				var value=$('#csearch').val();
				window.location.href='https://www.yeastar.com/?s='+value+'&lang=en';
			}
		})
    window.onscroll=function(){
			if($(document).scrollTop()<=0)
			{
				$('.header-menu').removeClass('header-menu-sticky');
			}
      else
      {
        $('.header-menu').addClass('header-menu-sticky');
      }
		}
 		// 课程时间
    t0 = new Date('2020-08-03T14:00:00Z');
    t1 = new Date('2020-08-04T14:00:00Z');
    t2 = new Date('2020-08-05T14:00:00Z');
    t3 = new Date('2020-08-06T14:00:00Z');
    t4 = new Date('2020-08-10T09:00:00Z');
    t5 = new Date('2020-08-11T09:00:00Z');
    t6 = new Date('2020-08-12T09:00:00Z');
    t7 = new Date('2020-08-13T09:00:00Z');
    t8 = new Date('2020-08-12T15:00:00Z');
    t9 = new Date('2020-08-13T15:00:00Z');
    t10 = new Date('2020-08-24T09:00:00Z');
    t11 = new Date('2020-08-25T09:00:00Z');
    t12 = new Date('2020-08-26T09:00:00Z');   
    t13 = new Date('2020-08-27T09:00:00Z');
    // 显示当地时间
    var dateArray = [t13,t12,t11,t10,t9,t8,t7,t6,t5,t4,t3,t2,t1,t0];
    addDate();
    function addDate() {
        dateNum = dateArray.length;
        for (var x = 0,y = dateNum-1; x < dateNum,y >= 0; x++,y--) {
            i = x;
            t = dateArray[y];
            times(i,t);
        }
    }

    function times(i,t) {
        var str = t.toTimeString().split(' ');
        jQuery('.schedule-date').eq(i).html(t.toLocaleDateString()+' '+str[0]+'<br>'+str[1]+str[2]);
    }
    // 更改聊天窗口的大小
    $("main").prepend('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=c41c3dec-e6f9-40ca-871f-6945b14052ea"> </script>');
    // var t = setInterval(function(){
    //     var sz = $("#launcher")[0];
    //   var isLogin = $("a[role='menuitem']")[0];
    //     if(sz) {
    //         clearInterval(t);
    //     $("main").append('<script>$zopim(function() {$zopim.livechat.window.setSize("large");});</script>');
    //     zE('webWidget', 'hide');
    //     if(isLogin) {
    //       zE('webWidget', 'show');
    //     }
    //     }
    // },1000);
    var t = setInterval(function(){
        var sz = $("#launcher")[0];
        var isLogin = $("#user-menu a[role='menuitem']")[0];
        var useId;
        if(sz) {
            clearInterval(t);
            $("main").append('<script>$zopim(function() {$zopim.livechat.window.setSize("large");});</script>');
            zE('webWidget', 'hide');
            if(isLogin) {
                $("a[role='menuitem']").each(function() {
                  	var hrefStr = $(this).attr("href");
                    if(hrefStr && hrefStr.indexOf("profiles") != -1) {
                        var useLen = $(this).attr("href").split("/").length;
                        useId = $(this).attr("href").split("/")[useLen-1].split("-")[0];
                    }
                })
                $.ajax({
                    url:'https://partner.yeastar.com/sync_official/support_check_email',
                    type:'post',
                    dataType:'json',
                    data: { 
                        "user_id": useId
                    },
                    success:function(useinfo) {
                        if(useinfo['data'] == true) {
                            zE('webWidget', 'show');
                        } else {
                            zE('webWidget', 'hide');  
                        }
                    },
                    error:function(err) {
                    }
                })
            }
        }
    },1000);
});


























//主页youtube轮播图开始


function Swiper(obj) {
		this.imgArr = obj.imgArr || [];
		this.retImgArr = [this.imgArr[this.imgArr.length-1], ...this.imgArr, this.imgArr[0]];
		this.aniTIme = obj.aniTIme || 1500;
		this.intervalTime = obj.intervalTime + this.aniTIme || 2500;
		this.nowIndex = 0;

		this.swiperListDom = document.getElementsByClassName('swiper-list-youtube')[0];
   
		this.swiperSpotDom;
		this.leftBtn;
		this.rightBtn;
		this.mainDom;

		this.moveWidth = this.swiperListDom.offsetWidth;
		this.timer = null;

		this.prev = Date.now();

		this.autoplay = obj.autoplay;

	}
	Swiper.prototype = {
		init: function() {
			this.initDom();

			// 轮播单张图片li
			let li = '';
			for (let i = 0; i < this.retImgArr.length; i++) {
				li += `<li style="left: ${i * this.moveWidth}px;width: ${this.moveWidth}px" class="swiper-item"><a href="${this.retImgArr[i].url}"><img src="${this.retImgArr[i].imgPath}" alt=""></a></li>`;
			}
			this.mainDom.innerHTML = li;

			// 小圆点li
			let spotLi = '';
			for (let i = 0; i < this.imgArr.length; i++) {
				if (i === 0) {
					spotLi += `<li class="spot-item" style="background-color: #ff5c1f;" index=${i}></li>`;
				} else {
					spotLi += `<li class="spot-item" index=${i}></li>`;
				}
			}
			this.swiperSpotDom.innerHTML = spotLi;

			if (this.autoplay) {
		this.timer = setInterval(this.nextSlider.bind(this, this.aniTIme), this.intervalTime);
			 }

			// 上一张，下一张，小圆点绑定点击事件
			this.eventBind()

		},
		initDom() {
			// 轮播图片dom容器
			this.mainDom = document.createElement('ul');
			this.mainDom.className = 'swiper-main';
			this.mainDom.style.width = `${this.moveWidth * (imgArr.length + 2)}px`;
			this.mainDom.style.left = `${-this.moveWidth}px`;
			this.swiperListDom.appendChild(this.mainDom)

			// 小圆点ul容器
			this.swiperSpotDom = document.createElement('ul');
			this.swiperSpotDom.className = 'swiper-spot';
			this.swiperListDom.appendChild(this.swiperSpotDom)

			// 上一张按钮
			this.leftBtn = document.createElement('img');
			this.leftBtn.className = 'leftBtn';
			this.leftBtn.src = 'https://update-ys2015-alicloud.oss-cn-hongkong.aliyuncs.com/YeastarSupport/supportportal/left.png';
			this.swiperListDom.appendChild(this.leftBtn)

			// 下一张按钮
			this.rightBtn = document.createElement('img');
			this.rightBtn.className = 'rightBtn';
			this.rightBtn.src = 'https://update-ys2015-alicloud.oss-cn-hongkong.aliyuncs.com/YeastarSupport/supportportal/right.png';
			if (this.imgArr.length===1) {
				this.leftBtn.style.display = 'none';
				this.rightBtn.style.display = 'none';
			}
			this.swiperListDom.appendChild(this.rightBtn)

		},
		prevSlider(aniTIme) {
			let that = this;
			if (this.imgArr.length===1) return;
			this.mainDom.style.transition = `left ${aniTIme / 1000}s`
			this.mainDom.style.left = `${parseInt(this.mainDom.style.left) + this.moveWidth}px`;
			if (this.nowIndex === 0) {
				that.nowIndex = (that.imgArr.length-1);
				that.setActiveSpot();
				setTimeout(function() {					
					that.mainDom.style.transitionProperty = 'none';
					that.mainDom.style.left = `${-that.imgArr.length * that.moveWidth}px`;
				}, aniTIme)
			} else {
				this.nowIndex--;
				this.setActiveSpot();
			}
		},
		nextSlider(aniTIme) {
			let that = this;
			if (this.imgArr.length===1) return;
			this.nowIndex++;
			this.mainDom.style.transition = `left ${aniTIme / 1000}s`
			this.mainDom.style.left = `${parseInt(this.mainDom.style.left) - this.moveWidth}px`;
			if (this.nowIndex === (this.imgArr.length)) {
				that.nowIndex = 0;
				that.setActiveSpot();
				setTimeout(function() {
					that.mainDom.style.transitionProperty = 'none';
					that.mainDom.style.left = `${-that.moveWidth}px`;
				}, aniTIme)
			} else {
				this.setActiveSpot();
			}
		},
		setActiveSpot: function() {
			for (let i = 0; i < this.swiperSpotDom.childElementCount; i++) {				
				if (i === Math.abs(this.nowIndex)) {
					document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ff5c1f'
				} else {
					document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ccc'
				}
			}
		},
		eventBind() {
			let that = this;
			// 上一张事件绑定
			this.leftBtn.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.leftBtn.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.leftBtn.addEventListener('click', function() {
				that.throttle(that.prevSlider, 300, 300);
			})


			// 下一张事件绑定
			this.rightBtn.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.rightBtn.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.rightBtn.addEventListener('click', function() {
				that.throttle(that.nextSlider, 300, 300);
			})


			// 小圆点事件绑定
			this.swiperSpotDom.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.swiperSpotDom.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.swiperSpotDom.addEventListener('click', function(e) {
				e = e || window.event; //这一行及下一行是为兼容IE8及以下版本
			　　var target = e.target || e.srcElement;
			　　if (target.tagName.toLowerCase() === "li") {
			　　　　 var ret = this.querySelectorAll("li");
			　　　　 let index = Array.prototype.indexOf.call(ret, target);
					that.nowIndex = index;
					that.setActiveSpot();
					that.mainDom.style.transition = `left .8s`
					that.mainDom.style.left = `${-(that.nowIndex+1) * that.moveWidth}px`;
			　　}
			})

			this.mainDom.addEventListener('touchstart', function(e) {
				clearInterval(that.timer);
				that.startX = e.changedTouches[0].clientX;
				that.startY = e.changedTouches[0].clientY;
			})
			this.mainDom.addEventListener('touchmove', function(e) {
				clearInterval(that.timer);
				that.endX = e.changedTouches[0].clientX;
				that.endY = e.changedTouches[0].clientY;
			})
			this.mainDom.addEventListener('touchend', function(e) {
				if (!that.mainDom.style.transition) {
					that.mainDom.style.transition = `left ${that.aniTIme / 1000}s`
				}
				let angle = that.angle({ X: that.startX, Y: that.startY }, { X: that.endX, Y: that.endY });
				if (Math.abs(angle) > 30) return;
			    if (that.endX > that.startX){ // 右滑
			    	that.prevSlider();
			    } else { // 左滑
			    	that.nextSlider();
			    }
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
				
			})
		},
		// 节流：时间戳版
		throttle(handle, delay, val) {
            var now = Date.now();
            if (now - this.prev >= delay) {
                handle.call(this, val);
                this.prev = Date.now();
            }
		},
		/**
		* 计算滑动角度
		* @param {Object} start 起点坐标
		* @param {Object} end 终点坐标
		*/
		angle: function (start, end) {
		    var _X = end.X - start.X,
		      _Y = end.Y - start.Y
		    //返回角度 /Math.atan()返回数字的反正切值
		    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
		}
	}


//主页youtube轮播图结束








//主页tools轮播图开始


function Swipere(obj) {
		this.imgArr = obj.imgArr || [];
		this.retImgArr = [this.imgArr[this.imgArr.length-1], ...this.imgArr, this.imgArr[0]];
		this.aniTIme = obj.aniTIme || 1500;
		this.intervalTime = obj.intervalTime + this.aniTIme || 2500;
		this.nowIndex = 0;

		this.swiperListDom = document.getElementsByClassName('swiper-list-tools')[0];
   
		this.swiperSpotDom;
		this.leftBtn;
		this.rightBtn;
		this.mainDom;

		this.moveWidth = this.swiperListDom.offsetWidth;
		this.timer = null;

		this.prev = Date.now();

		this.autoplay = obj.autoplay;

	}
	Swipere.prototype = {
		init: function() {
			this.initDom();

			// 轮播单张图片li
			let li = '';
			for (let i = 0; i < this.retImgArr.length; i++) {
				li += `<li style="left: ${i * this.moveWidth}px;width: ${this.moveWidth}px" class="swiper-item"><a href="${this.retImgArr[i].url}"><img src="${this.retImgArr[i].imgPath}" alt=""></a></li>`;
			}
			this.mainDom.innerHTML = li;

			// 小圆点li
			let spotLi = '';
			for (let i = 0; i < this.imgArr.length; i++) {
				if (i === 0) {
					spotLi += `<li class="spot-item" style="background-color: #ff5c1f;" index=${i}></li>`;
				} else {
					spotLi += `<li class="spot-item" index=${i}></li>`;
				}
			}
			this.swiperSpotDom.innerHTML = spotLi;

			 if (this.autoplay) {
			 	this.timer = setInterval(this.nextSlider.bind(this, this.aniTIme), this.intervalTime);
			 }

			// 上一张，下一张，小圆点绑定点击事件
			this.eventBind()

		},
		initDom() {
			// 轮播图片dom容器
			this.mainDom = document.createElement('ul');
			this.mainDom.className = 'swiper-main';
			this.mainDom.style.width = `${this.moveWidth * (imgArr.length + 2)}px`;
			this.mainDom.style.left = `${-this.moveWidth}px`;
			this.swiperListDom.appendChild(this.mainDom)

			// 小圆点ul容器
			this.swiperSpotDom = document.createElement('ul');
			this.swiperSpotDom.className = 'swiper-spot';
			this.swiperListDom.appendChild(this.swiperSpotDom)

			// 上一张按钮
			this.leftBtn = document.createElement('img');
			this.leftBtn.className = 'leftBtn';
			this.leftBtn.src = 'https://update-ys2015-alicloud.oss-cn-hongkong.aliyuncs.com/YeastarSupport/supportportal/left.png';
			this.swiperListDom.appendChild(this.leftBtn)

			// 下一张按钮
			this.rightBtn = document.createElement('img');
			this.rightBtn.className = 'rightBtn';
			this.rightBtn.src = 'https://update-ys2015-alicloud.oss-cn-hongkong.aliyuncs.com/YeastarSupport/supportportal/right.png';
			if (this.imgArr.length===1) {
				this.leftBtn.style.display = 'none';
				this.rightBtn.style.display = 'none';
			}
			this.swiperListDom.appendChild(this.rightBtn)

		},
		prevSlider(aniTIme) {
			let that = this;
			if (this.imgArr.length===1) return;
			this.mainDom.style.transition = `left ${aniTIme / 1000}s`
			this.mainDom.style.left = `${parseInt(this.mainDom.style.left) + this.moveWidth}px`;
			if (this.nowIndex === 0) {
				that.nowIndex = (that.imgArr.length-1);
				that.setActiveSpot();
				setTimeout(function() {					
					that.mainDom.style.transitionProperty = 'none';
					that.mainDom.style.left = `${-that.imgArr.length * that.moveWidth}px`;
				}, aniTIme)
			} else {
				this.nowIndex--;
				this.setActiveSpot();
			}
		},
		nextSlider(aniTIme) {
			let that = this;
			if (this.imgArr.length===1) return;
			this.nowIndex++;
			this.mainDom.style.transition = `left ${aniTIme / 1000}s`
			this.mainDom.style.left = `${parseInt(this.mainDom.style.left) - this.moveWidth}px`;
			if (this.nowIndex === (this.imgArr.length)) {
				that.nowIndex = 0;
				that.setActiveSpot();
				setTimeout(function() {
					that.mainDom.style.transitionProperty = 'none';
					that.mainDom.style.left = `${-that.moveWidth}px`;
				}, aniTIme)
			} else {
				this.setActiveSpot();
			}
		},
		setActiveSpot: function() {
			for (let i = 0; i < this.swiperSpotDom.childElementCount; i++) {				
				if (i === Math.abs(this.nowIndex)) {
					document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ff5c1f'
				} else {
					document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ccc'
				}
			}
		},
		eventBind() {
			let that = this;
			// 上一张事件绑定
			this.leftBtn.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.leftBtn.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.leftBtn.addEventListener('click', function() {
				that.throttle(that.prevSlider, 300, 300);
			})


			// 下一张事件绑定
			this.rightBtn.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.rightBtn.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.rightBtn.addEventListener('click', function() {
				that.throttle(that.nextSlider, 300, 300);
			})


			// 小圆点事件绑定
			this.swiperSpotDom.addEventListener('mouseover', function() {
				clearInterval(that.timer);
			})
			this.swiperSpotDom.addEventListener('mouseout', function() {
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
			})
			this.swiperSpotDom.addEventListener('click', function(e) {
				e = e || window.event; //这一行及下一行是为兼容IE8及以下版本
			　　var target = e.target || e.srcElement;
			　　if (target.tagName.toLowerCase() === "li") {
			　　　　 var ret = this.querySelectorAll("li");
			　　　　 let index = Array.prototype.indexOf.call(ret, target);
					that.nowIndex = index;
					that.setActiveSpot();
					that.mainDom.style.transition = `left .8s`
					that.mainDom.style.left = `${-(that.nowIndex+1) * that.moveWidth}px`;
			　　}
			})

			this.mainDom.addEventListener('touchstart', function(e) {
				clearInterval(that.timer);
				that.startX = e.changedTouches[0].clientX;
				that.startY = e.changedTouches[0].clientY;
			})
			this.mainDom.addEventListener('touchmove', function(e) {
				clearInterval(that.timer);
				that.endX = e.changedTouches[0].clientX;
				that.endY = e.changedTouches[0].clientY;
			})
			this.mainDom.addEventListener('touchend', function(e) {
				if (!that.mainDom.style.transition) {
					that.mainDom.style.transition = `left ${that.aniTIme / 1000}s`
				}
				let angle = that.angle({ X: that.startX, Y: that.startY }, { X: that.endX, Y: that.endY });
				if (Math.abs(angle) > 30) return;
			    if (that.endX > that.startX){ // 右滑
			    	that.prevSlider();
			    } else { // 左滑
			    	that.nextSlider();
			    }
				that.timer = setInterval(that.nextSlider.bind(that, that.aniTIme), that.intervalTime);
				
			})
		},
		// 节流：时间戳版
		throttle(handle, delay, val) {
            var now = Date.now();
            if (now - this.prev >= delay) {
                handle.call(this, val);
                this.prev = Date.now();
            }
		},
		/**
		* 计算滑动角度
		* @param {Object} start 起点坐标
		* @param {Object} end 终点坐标
		*/
		angle: function (start, end) {
		    var _X = end.X - start.X,
		      _Y = end.Y - start.Y
		    //返回角度 /Math.atan()返回数字的反正切值
		    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
		}
	}


//主页tools轮播图结束






