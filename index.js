const app = "I don't do much."

function init(){

	var dodger = document.getElementById('dodger');

	function moveDodgerLeft() {
  	var leftNumbers = dodger.style.left.replace('px', '')
  	var left = parseInt(leftNumbers, 10)
 
 	 if (left > 0) {
    	dodger.style.left = `${left - 10}px`
  		}
	}

	function moveDodgerRight() {
  	var leftNumbers = dodger.style.left.replace('px', '')
  	var left = parseInt(leftNumbers, 10)
 
 	 if (left < 360) {
    	dodger.style.left = `${left + 10}px`
  		}
	}

	document.addEventListener('keydown', function(e) {
  		if (e.which === 37) {
   			moveDodgerLeft()
  		}else if(e.which === 39)	{
  			console.log("Right arrow down!")
  			moveDodgerRight()
  		}
	})
}