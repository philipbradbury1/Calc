
var Calc = {

	display : document.getElementById("display"),
	sumOperator: "",
	sumNumbers: 0,
	sumMemory: 0,

	sumGetNumber: function(number){

		if(this.display.innerHTML == 0 ||  isNaN(this.display.innerHTML) ){
				this.display.innerHTML = "";
		}
		 var output = this.display.innerHTML += number;
		 this.sumNumbers = parseInt(output,10);
		
	},

	mainSum: function(oper){


	 	 if(this.sumNumbers != 0 && this.sumOperator == "+"){
			this.sumMemory += this.sumNumbers;
		} else if(this.sumNumbers != 0 && this.sumOperator == "*"){
			this.sumMemory *= this.sumNumbers;
		} else if(this.sumNumbers != 0 && this.sumOperator == "-"){
			this.sumMemory -= this.sumNumbers;
		} else if(this.sumNumbers != 0 && this.sumOperator == "/"){
			this.sumMemory /= this.sumNumbers;
		} else if(this.sumMemory == 0){
			this.sumMemory = this.sumNumbers;
		}

		display.innerHTML = oper;
console.log(oper);

console.log(this.sumMemory);

	this.sumOperator  = (oper === "=") ? null : oper;

	if (this.sumOperator === null){
		display.innerHTML = this.sumMemory;

	}


	},


	sumDel: function(){
	    this.display.innerHTML = 0;
		this.sumNumbers = 0;
		this.sumOperator = "";
		this.sumMemory = 0;
	},

	science: function(){

		var button = document.getElementsByClassName("science");
		var aNode = button[0];
		

		if (aNode.style.visibility !== 'hidden') {
        aNode.style.visibility = 'hidden';
       
    	}
    	else {
        aNode.style.visibility = 'visible';
        
    	}	

	}


};

Calc.display.innerHTML = 0;














