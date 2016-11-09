$(function(){
	var nav1=$(".zong2 .banner2 .nav1")
	var fullTime
	var time=new Date()
	var nowTime
	var nowHour
	var nowFen
	var start
	nowTime=time.toLocaleDateString()
	nowHour=time.getHours()
	nowFen=time.getMinutes()
	fullTime=nowHour+':'+nowFen
	nav1.html(nowTime);	
	$(".kaishi").click(function(){
		$(".zong").css("display","none");
		$(".zong5").css("display","block");
		$(".footer3").css("display","block");
    })
	var add=$(".add")
	var input =$(".zong2 input")
	var ul=$(".addt")
	var todos=[];
	var startpos
        ul.on("touchstart",".banner3",function(e){
         	 startpos=e.originalEvent.changedTouches[0].clientX;
         })
         ul.on("touchend",".banner3",function(e){
         	var p=e.originalEvent.changedTouches[0].clientX;
         	if(p-startpos>=50){
         		$(this).addClass("op")
         		todos[$(this).index()].state=1;
         		localStorage.todos=JSON.stringify(todos)
         	}
         	if(p-startpos< -50){
         		$(this).removeClass("op")
         		todos[$(this).index()].state=0;
         		localStorage.todos=JSON.stringify(todos)
         	}
         })
	
	
	
	
	
	
	
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);
			for(var i=0; i<todos.length; i++){
				var c=(todos[i].state)?" op":""
			$('<div class="banner3'+ c+'"><div class="top"><div class="left">'+todos[i].name+'</div><div class="right"><span class="icon first">&#xe764;</span><span class="icon second">&#xe604;</span><span class="icon last">&#xe623;</span></div></div><div class="bottom"><div class="left">'+fullTime+'</div><div class="right"><span class="icon last">&#xe631;</span><span>'+fullTime+'</span></div></div></div>').appendTo(".addt");
			}
	}
	add.on("touchend",function(){
		$(".zong2").css("display","none");
		$(".zong5").css("display","block");
		$(".footer3").css("display","block");
		var v=$.trim(input.val())
		if(!v){
			return;
		}
		var todo={
			name:v,
			state:0
		};
		todos.push(todo)
		localStorage.todos=JSON.stringify(todos)
		$('<div class="banner3"><div class="top"><div class="left">'+v+'</div><div class="right"><span class="icon first">&#xe764;</span><span class="icon second">&#xe604;</span><span class="icon last">&#xe623;</span></div></div><div class="bottom"><div class="left">'+fullTime+'</div><div class="right"><span class="icon last">&#xe631;</span><span>'+fullTime+'</span></div></div></div>').appendTo(".addt");
		input.val("");
	})
	
	
	
	
	
	
	ul.on("touchstart",".second",function(){
		var li=$(this).closest(".banner3")
		var index=li.index()
		todos.splice(index,1)
		localStorage.todos=JSON.stringify(todos);
		li.addClass("ani-delete")

		li.delay(800).queue(function(){
			$(this).remove().dequeue();
		localStorage.todos=JSON.stringify(todos);
		})
	})
	
	ul.on("touchstart",".first",function(){
		$(".zong2").css("display","block");
		$(".zong5").css("display","none");
		$(".footer3").css("display","none");
	
	})

	$(".banner2 .nav .left").click(function(){
		$(".zong").css("display","block");
		$(".zong2").css("display","none");
	})

	$(".footer3 .right img").click(function(){
		$(".zong2").css("display","block");
		$(".zong5").css("display","none");
		$(".footer3").css("display","none");
	})

	$(".footer3 .left img").click(function(){
		$(".zong5").css("display","block");
		$(".zong2").css("display","none");
	})

	
	
	
	
	
	var divs=$(".logo5 .bottom div")
	divs.on("touchend",function(){
		divs.removeClass("active")
		$(this).addClass("active")
		ul.find(".banner3").show()
		var role=$(this).attr("data-role")
		if(role==="com"){
			ul.find(".banner3:not(.op)").hide()
		}else if(role==="all"){
			ul.find(".banner3").show()
		}else if(role==="rem"){
			ul.find(".banner3.op").hide()
		}
	})

})
