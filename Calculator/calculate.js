$(document).ready(function(){
	var inputs=[""];//记录所有按键的值
	var history;//记录按键组合成的字符串
	var answer=0;
	var numbers=[0,1,2,3,4,5,6,7,8,9];
	var operators=['+','-','*','/'];
	var dot=['.'];
	var changed=true;
	

	function getValue(input){
		// if(dot.includes(inputs[inputs.length-1])===true&&input==="."){
		// 	console.log("Duplicate '.' ");
		// }else if(inputs.length===1&&operators.includes(input)===false){
		// 	inputs.push(input);
		// }else if(operators.includes(inputs[inputs.length-1])===false){
		// 	inputs.push(input);
		// }else if(numbers.includes(Number(input))){
		// 	inputs.push(input);
		// }
		if(validateInput(input)){
			if(inputs.length<=42){
				inputs.push(input);
			}else{
				console.log("too long inputs");
			}			
			console.log("inputs:"+inputs.length);
		}
		updateShow();
		
	}

	function validateInput(input){
		//重复输入小数点的情况
		if(dot.includes(inputs[inputs.length-1])===true&&input==="."){
			console.log("Duplicate '.' ");
			changed=false;
		}
		//重复输入操作符的情况
		else if(operators.includes(inputs[inputs.length-1])===true&&operators.includes(input)){
			console.log("Duplicate operators");
			changed=false;
		}
		//初始输入为操作符的情况
		else if(inputs.length===1&&operators.includes(input)===true){
			changed=false;
		}
		else{
			changed=true;
		}
		return changed;	
	}

	function updateShow(){
		history=inputs.join("");
		$("#history").html("<p>"+history+"</p>");
		$("#answer").html(answer);
	}

	function getResult(){
		if(inputs.length>1){
			history=inputs.join("");		
			answer=eval(history);			
		}
		console.log("answer:"+answer);
		$("#answer").html(answer);
	}

	$('button').click(function(){
		var input=$(this).attr("value");
		if(this.id==="all-clear"){
			inputs=[""];
			answer=0;
			updateShow();
		}else if(this.id==="delete"){
			inputs.pop();
			updateShow();
		}else if(this.id==="equal"){
			getResult();
		}else {
			getValue(this.value);
		}					
	});	
})