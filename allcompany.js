
MobinWeaver.mobinAppStart(function() {

    (function(exports){


        var allenteController=Spine.Controller.sub({

            init:function(){

                console.log("init letter");
                this.onbackpressed();
                this.renderletterlayer();

            },
            onbackpressed:function(){

                $(".allback").on("tap",function(){

                    MobinWeaver.exit();

                })

            },
            renderletterlayer:function(){

                var data={
                    list:[
                        {
                            letter:"A"
                        },{
                            letter:"B"
                        },{
                            letter:"C"
                        },{
                            letter:"D"
                        },{
                            letter:"N"
                        }
                    ]
                };
                var html = template.render('test', data);
                document.getElementById('mainlist').innerHTML = html;
                this.putitems();
                this.checklettertitle(data);
                this.initScroller();

            },
            putitems:function(){

                var letterdata={

                    letterlist:[
                        {
                            letterFlag:"A",
                            abstract:"阿迪达斯是德国著名的体育公司",
                            imgsrc:"img/nike.jpg",
                            title:"ADIDAS"
                        },
                        {
                            letterFlag:"A",
                            abstract:"APPLE是美国著名的科技公司",
                            imgsrc:"img/apple.jpg",
                            title:"Apple"
                        },
                        {
                            letterFlag:"N",
                            abstract:"耐克是美国著名的体育公司",
                            imgsrc:"img/fly.jpg",
                            title:"NIKE"
                        }

                    ]

                };
                var length=letterdata.letterlist.length;
                for(i=0;i<length;i++){

                    var bb=letterdata.letterlist[i].letterFlag;

                    switch (bb){

                        case "A":
                            this.casetunnel("A",letterdata);
                            break;
                        case "B":
                            this.casetunnel("B",letterdata);
                            break;
                        case "C":
                            this.casetunnel("C",letterdata);
                            break;
                        case "D":
                            this.casetunnel("D",letterdata);
                            break;
                        case "N":
                            this.casetunnel("N",letterdata);
                            break;

                    }

                }

            },
            casetunnel:function(e,l){
                this.constructtmpl(l);
                $("."+e).find(".lettercontainer").append(div1);
            },
            constructtmpl:function(e){

                var letterdata=e;
                 div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var img=document.createElement("img");
                div1.setAttribute("class","litems");
                div2.setAttribute("class","lcontainer");
                div3.setAttribute("class","ltitle");
                div4.setAttribute("class","labstract");
                img.src=letterdata.letterlist[i].imgsrc;
                var tn1 = document.createTextNode("p");
                var tn2 = document.createTextNode("p");
                tn1.nodeValue=letterdata.letterlist[i].title;
                tn2.nodeValue=letterdata.letterlist[i].abstract;
                div2.appendChild(img);
                div3.appendChild(tn1);
                div4.appendChild(tn2);
                div1.appendChild(div2);
                div1.appendChild(div3);
                div1.appendChild(div4);
            },
            checklettertitle:function(data){

                console.log(data);
                var length=data.list.length;
                for(i=0;i<length;i++){
                    var letter=data.list[i].letter;
                    var childlength=$("."+letter).find(".lettercontainer").children().length;
                    if(childlength==0){
                        $("."+letter).addClass("hide");
                    }


                }
            },
            initScroller:function(){

                //加入isrcoll
                var newsiscroll=new iScroll("scrollerarea",{hScrollbar : true,vScrollbar:true});

            }


        })




        exports.allenteController=allenteController;


    })(window);

    var a=new allenteController();

});
