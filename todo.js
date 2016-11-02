$(function(){
	var add=$(".add")
	var input =$(".head input")
	var ul=$(".todolist")
	var todos=[];
	 var startpos
        ul.on("touchstart","li",function(e){
         	 startpos=e.originalEvent.changedTouches[0].clientX;
         })
         ul.on("touchend","li",function(e){
         	var p=e.originalEvent.changedTouches[0].clientX;
         	if(p-startpos>=50){
         		$(this).addClass("done")
         		todos[$(this).index()].state=1
         		localStorage.todos=JSON.stringify(todos)
         	}
         	if(p-startpos< -50){
         		$(this).removeClass("done")
         		todos[$(this).index()].state=0
         		localStorage.todos=JSON.stringify(todos)
         	}
         })
	
	
	
	
	
	
	
	
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);
			for(var i=0; i<todos.length; i++){
				var c=(todos[i].state)?"done":""
			$("<li class='"+c+"'><div class='content'>"+todos[i].name+"</div><div class='delete'>X</div></li>").appendTo(ul);
			}
	}
	add.on("touchend",function(){
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
		$("<li><div class='content'>"+v+"</div><div class='delete'>X</div></li>").appendTo(ul);
		input.val("");
	})
})