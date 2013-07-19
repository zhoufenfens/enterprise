$(document).ready(function(){

    (function(exports){


        var detailController=Spine.Controller.sub({

            init:function(){
                console.log("init detail page");
                var that=this;
                $(".maintab").on("tap", ".tabitems", function (e) {
                    var tappedname = $(e.target).text();
                    switch (tappedname) {
                        case "简介":
                            that.hidetabdetail(this, "#intro");
                            break;
                        case "新闻":
                            that.hidetabdetail(this, "#news");
                            break;
                        case "产品":
                            that.hidetabdetail(this, "#prod");
                            break;
                        case "应用":
                            that.hidetabdetail(this, "#appli");
                            break;
                    }
                });

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

               //加入isrcoll
                var newsiscroll=new iScroll("news",{hScrollbar : true,vScrollbar:true});


            },
            hidetabdetail:function(e,id){
                $(".tabdetail").addClass("hide");
                $(".tabitems").removeClass("tapped");
                $(e).addClass("tapped");
                $(id).removeClass("hide");
            }



        });

        exports.detailController=detailController;


    })(window);


var a=new detailController();


});
