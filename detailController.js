
$(document).ready(function(){

    (function(exports){


        var detailController=Spine.Controller.sub({

            init:function(){
                console.log("init detail page");
                $(".maintab").on("tap", ".tabitems",this.proxy(this.taponeitem));
                this.initTemplate();
                this.initScroller();
                this.addSlider();
            },
            taponeitem: function (e) {
                var tappedname = $(e.target).text();
                var that= e.target;
                switch (tappedname) {
                    case "简介":
                        this.hidetabdetail(that,"#intro");
                        break;
                    case "新闻":
                        this.hidetabdetail(that,"#news");
                        break;
                    case "产品":
                        this.hidetabdetail(that,"#prod");
                        break;
                    case "应用":
                        this.hidetabdetail(that,"#appli");
                        break
                }
            },
            hidetabdetail:function(e,id){
                $(".tabdetail").addClass("hide");
                $(".tabitems").removeClass("tapped");
                $(e).addClass("tapped");
                $(id).removeClass("hide");
            },
            initTemplate:function(){

                //新闻页面渲染模板
                var data={

                    list:[
                        {
                            title:"nike trainning",
                            abstract:"持续跑步",
                            imgsrc:"img/nike.jpg"

                        },
                        {
                            title:"nike trainning",
                            abstract:"持续跑步",
                            imgsrc:"img/nike.jpg"

                        },
                        {
                            title:"nike trainning",
                            abstract:"持续跑步",
                            imgsrc:"img/nike.jpg"

                        },
                        {
                            title:"nike trainning",
                            abstract:"持续跑步",
                            imgsrc:"img/nike.jpg"

                        },
                        {
                            title:"nike trainning",
                            abstract:"持续跑步",
                            imgsrc:"img/nike.jpg"

                        }


                    ]
                };

                var html = template.render('test', data);
                document.getElementById('newsisrcoller').innerHTML = html;


            },
            initScroller:function(){

                //加入isrcoll
                var newsiscroll=new iScroll("news",{hScrollbar : true,vScrollbar:true});
                //加入slider


            },
            addSlider:function(){

                var mySwipe=new Swipe(document.getElementById("slider"),{
                    callback:function(ele,pos){
                        var bullets = document.getElementById('position').getElementsByTagName('li');
                        var i = bullets.length;
                        while (i--) {
                            bullets[i].className = ' ';
                        }
                        bullets[pos].className = 'on';

                    }

                });

            }

        });

        exports.detailController=detailController;


    })(window);


var a=new detailController();


});

