var app = angular.module('app', ['ngRoute']);

//var d3 = require("d3");
import d3 from "d3";
window.d3 = d3;


const {remote} = require('electron');

/*
app.service('image', function() {
	var imagePath = "";
	var imagePath_2 = "";
	var imagePath_3 = "";
	var dimesions = [];
	this.setImagePath = function(path) {
		imagePath = path;
	};
	this.setImagePath_2 = function(path_2) {
		imagePath_2 = path_2;
	};
	this.setImagePath_3 = function(path_3) {
		imagePath_3 = path_3;
	};

	this.getImagePath = function() {
		return imagePath;
	};
	this.getImagePath_2 = function() {
		return imagePath_2;
	};
	this.getImagePath_3 = function() {
		return imagePath_3;
	};

	this.setImageDimensions = function(imgDimesions) {
		dimesions = imgDimesions;
	};
	this.getImageDimensions = function() {
		return dimesions;
	};
});
*/

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: `${__dirname}/components/home/home.html`,
		controller: 'homeCtrl'
	}).when('/laba_1', {
		templateUrl: `${__dirname}/components/laba/laba.html`,
		controller: 'labaCtrl_1'
	}).when('/laba_1_task_1', {
		templateUrl: `${__dirname}/components/laba1Task1/laba1Task1.html`,
		controller: 'taskCtrl_1'
	}).when('/laba_1_task_2', {
		templateUrl: `${__dirname}/components/laba1Task2/laba1Task2.html`,
		controller: 'taskCtrl_2'
	}).when('/laba_1_task_3', {
		templateUrl: `${__dirname}/components/laba1Task3/laba1Task3.html`,
		controller: 'taskCtrl_3'

	}).when('/laba_2', {
		templateUrl: `${__dirname}/components/laba2/laba2.html`,
		controller: 'labaCtrl_2'
	}).when('/laba_2_task_1', {
		templateUrl: `${__dirname}/components/laba2Task1/laba2Task1.html`,
		controller: 'taskCtrl_2_1'
	}).when('/laba_2_task_2', {
		templateUrl: `${__dirname}/components/laba2Task2/laba2Task2.html`,
		controller: 'taskCtrl_2_2'
	}).when('/laba_2_task_3', {
		templateUrl: `${__dirname}/components/laba2Task3/laba2Task3.html`,
		controller: 'taskCtrl_2_3'


	}).otherwise({
		template: '404 bro'
	});
});

// ---------- CONTROLLERS ----------

app.controller('headCtrl', function($scope) {
	var win = remote.getCurrentWindow();

	$scope.close = function() {
		win.close();
	};
	$scope.maximize = function() {
		win.isMaximized() ? win.unmaximize() : win.maximize();
	};
	$scope.minimize = function() {
		win.minimize();
	}
});

app.controller('homeCtrl', function($scope, $location) {

	$scope.openLab_1 = function () {
		$location.path('/laba_1');
	}

	$scope.openLab_2 = function () {
		$location.path('/laba_2');
	}

});

app.controller('labaCtrl_1', function($scope, $location) {

	$scope.openTask_1 = function () {
		$location.path('/laba_1_task_1');
	}

	$scope.openTask_2 = function () {
		$location.path('/laba_1_task_2');
	}

	$scope.openTask_3 = function () {
		$location.path('/laba_1_task_3');
	}

	$scope.goHome = function () {
		$location.path('/');
	}

});

app.controller('labaCtrl_2', function($scope, $location) {

	$scope.openTask_1 = function () {
		$location.path('/laba_2_task_1');
	}

	$scope.openTask_2 = function () {
		$location.path('/laba_2_task_2');
	}

	$scope.openTask_3 = function () {
		$location.path('/laba_2_task_3');
	}

	$scope.goHome = function () {
		$location.path('/');
	}

});

// ---------- TASK LAB 1 ----------

app.controller('taskCtrl_1', function($scope, $location) {

	var input_x = document.getElementById('input_x');
	var input_y = document.getElementById('input_y');
	var input_z = document.getElementById('input_z');

	input_x.oninput = function() {
		var x = input_x.value;
		//var u = Formul.test(x);
		Formul.x = x;
    	document.getElementById('result_x').innerHTML = x;
  	};

  	input_y.oninput = function() {
		var y = input_y.value;
		Formul.y = y;
    	document.getElementById('result_y').innerHTML = y;
  	};

  	input_z.oninput = function() {
		var z = input_z.value;
		Formul.z = z;
    	document.getElementById('result_z').innerHTML = z;
  	};

	$scope.goHome = function () {
		$location.path('/laba_1');
	}

	$scope.calc = function() {

  	var result_u = Formul.calc(+Formul.x, +Formul.y, +Formul.z);
  	document.getElementById('result_u').innerHTML = result_u;
  	alert(`Button is clicked! And U = ${result_u}`);

	}

})

app.controller('taskCtrl_2', function($scope, $location) {

	var input_x3 = document.getElementById('input_x3');
	var input_y3 = document.getElementById('input_y3');
	var input_z3 = document.getElementById('input_z3');

	input_x3.oninput = function() {
		var x3 = input_x3.value;
		//var u = Formul.test(x);
		Formul.x3 = x3;
    	document.getElementById('result_x3').innerHTML = x3;
  	};

  	input_y3.oninput = function() {
		var y3 = input_y3.value;
		Formul.y3 = y3;
    	document.getElementById('result_y3').innerHTML = y3;
  	};

  	input_z3.oninput = function() {
		var z3 = input_z3.value;
		Formul.z3 = z3;
    	document.getElementById('result_z3').innerHTML = z3;
  	};

	$scope.goHome = function () {
		$location.path('/laba_1');
	}

	$scope.calc3 = function() {

  		var result_u3 = Formul.calc3(+Formul.x3, +Formul.y3, +Formul.z3);
  		document.getElementById('result_u3').innerHTML = result_u3;
  		alert(`Button is clicked! And U = ${result_u3}`);

	}	

})

app.controller('taskCtrl_3', function($scope, $location) {

	$scope.goHome = function () {
		$location.path('/laba_1');
	}

	$scope.calc3 = function() {

	}	

	const functionPlot = require("function-plot");

	const root = document.querySelector("#chart__insert");

	functionPlot({
  target: root,
  yAxis: { domain: [-1, 9] },
  tip: {
    renderer: function() {}
  },
  grid: true,
  data: [
    {
      fn: "x^2",
      derivative: {
        fn: "2 * x",
        updateOnMouseMove: true
      }
    }
  ]
});


})

// ---------- TASK LAB 2 ----------

app.controller('taskCtrl_2_1', function($scope, $location) {

	var input_x = document.getElementById('input_x');
	var input_y = document.getElementById('input_y');
	var input_z = document.getElementById('input_z');
	var input_q = document.getElementById('input_q')

	var input_x2 = document.getElementById('input_x2');
	var input_y2 = document.getElementById('input_y2');
	var input_z2 = document.getElementById('input_z2');
	var input_q2 = document.getElementById('input_q2')


	input_x.oninput = function() {
		var x = input_x.value;
		//var u = Formul.test(x);
		Formul.x = x;
  	};

  	input_y.oninput = function() {
		var y = input_y.value;
		Formul.y = y;
  	};

  	input_z.oninput = function() {
		var z = input_z.value;
		Formul.z = z;
  	};

  	input_q.oninput = function() {
		var q = input_q.value;
		Formul.q = q;
  	};

  	input_x2.oninput = function() {
		var x2 = input_x2.value;
		//var u = Formul.test(x);
		Formul.x2 = x2;
  	};

  	input_y2.oninput = function() {
		var y2 = input_y2.value;
		Formul.y2 = y2;
  	};

  	input_z2.oninput = function() {
		var z2 = input_z2.value;
		Formul.z2 = z2;
  	};

  	input_q2.oninput = function() {
		var q2 = input_q2.value;
		Formul.q2 = q2;
  	};

	$scope.goHome = function () {
		$location.path('/laba_2');
	}

	$scope.calc = function() {

  	var result_u = Formul.calcWhile(+Formul.x, +Formul.y, +Formul.z, +Formul.q);
  	document.getElementById('result_u').innerHTML = result_u;

  	var result_u2 = Formul.calcWhile2(+Formul.x, +Formul.y, +Formul.z, +Formul.q);
  	document.getElementById('result_u2').innerHTML = result_u2;

	}

	$scope.calc2 = function() {

  	var result_u21 = Formul.calcWhile21(+Formul.x2, +Formul.y2, +Formul.z2, +Formul.q2);
  	document.getElementById('result_u21').innerHTML = result_u21;

  	var result_u22 = Formul.calcWhile22(+Formul.x2, +Formul.y2, +Formul.z2, +Formul.q2);
  	document.getElementById('result_u22').innerHTML = result_u22;

	}

})

app.controller('taskCtrl_2_2', function($scope, $location) {


	$scope.goHome = function () {
		$location.path('/laba_2');
	}

	$scope.calc3 = function() {


	}	

})

app.controller('taskCtrl_2_3', function($scope, $location) {

	var input_x3 = document.getElementById('input_x3');
	var input_n3 = document.getElementById('input_n3');

	input_x3.oninput = function() {
		var x3 = input_x3.value;
		//var u = Formul.test(x);
		Formul.x3 = x3;
  	};

  	input_n3.oninput = function() {
		var n3 = input_n3.value;
		Formul.n3 = n3;
  	};

	$scope.goHome = function () {
		$location.path('/laba_2');
	}

	$scope.calc3 = function() {

  		var result_u3 = Formul.calcMethod(+Formul.x3, +Formul.n3);
  		document.getElementById('result_u3').innerHTML = result_u3;
  		alert(`Button is clicked! And U = ${result_u3}`);

	}	


})

// -------- Модуль тут, потом вынести --------

Formul = {};

Formul.test = function(arg_test) {
  var a = arg_test;
  return a*2;
}

Formul.calc = function(x, y, z) {
	var x = x;
	var y = y;
	var z = z;
	//Math.pow(base, exponent)
  	//var u = Math.tan(x+y);
  	//var u = Math.pow(Math.E, y)
  	var u = (Math.pow(Math.tan(x+y), 2)) - (Math.pow(Math.E, (y-z))*(Math.pow(( Math.pow(Math.cos(x), 2) + Math.pow(Math.cos(z), 2) ) ,0.5)) )
  	return u;
}

Formul.calc2 = function(arg_test) {
  var a = arg_test;
  return a*2;
}

Formul.calc3 = function(x, y, z) {
	var x = x;
	var y = y;
	var z = z;
	var rule = z-x;
	var u;

		if ( rule == 0 ) {
			//u = 0;
			u = y*Math.sin(x) + z;

		}  else if ( rule > 0 ) {
			//u = 1;
			u = y*Math.sin(Math.sin(x)) + z;

		} else if ( rule < 0 ) {
			//u = -1;
			u = y*Math.pow(Math.E, Math.sin(x)) - z;
		}

	return u;
}

Formul.calc5 = function(arg_test) {
  var a = arg_test;
  return a*2;
}

Formul.calcWhile = function(x, y, z, q) {
	var x0 = x;
	var xk = y;
	var dx = z;
	var a = q;

	var x = x0;

	// Почему эта формула?
	while (x <=  (xk - dx/2))
	{
		//var y =  a*Math.log(x);
		x = x + dx;
	}
	//var y =  a*Math.log(x);

	console.log('From calcWhile x0 = ' + x0);
	console.log('From calcWhile xk = ' + xk);
	console.log('From calcWhile dx = ' + dx);
	console.log('From calcWhile a = ' + a);
	console.log('From calcWhile x = ' + x);
	var u = x;
	return u;

}

Formul.calcWhile2 = function(x, y, z, q) {
	var x0 = x;
	var xk = y;
	var dx = z;
	var a = q;

	var x = x0;

	while (x <=  (xk - dx/2))
	{
		//var y =  a*Math.log(x);
		x = x + dx;
	}
	var y =  a*Math.log(x);

	console.log('From calcWhile y = ' + y);
	var u = y;
	return u;

}

Formul.calcWhile21 = function(x, y, z, q) {
	var x0 = x;
	var xk = y;
	var dx = z;
	var d = q;

	var x = x0;

	// Почему эта формула?
	while (x <=  (xk - dx/2))
	{
		//var y =  a*Math.log(x);
		x = x + dx;
	}
	//var y =  a*Math.log(x);

	console.log('From calcWhile x0 = ' + x0);
	console.log('From calcWhile xk = ' + xk);
	console.log('From calcWhile dx = ' + dx);
	console.log('From calcWhile a = ' + d);
	console.log('From calcWhile x = ' + x);
	var u = x;
	return u;

}

Formul.calcWhile22 = function(x, y, z, q) {
	var x0 = x;
	var xk = y;
	var dx = z;
	var d = q;

	var x = x0;

	while (x <=  (xk - dx/2))
	{
		//var y =  a*Math.log(x);
		x = x + dx;
	}
	var y =  Math.pow(x, 4) + Math.cos(2 + Math.pow(x, 3) - d);

	console.log('From calcWhile y = ' + y);
	var u = y;
	return u;

}

Formul.calcMethod = function(x, n) {
  	var x = x;
	var y = y;
	var n = n;

	y = 0;
	var newx = Math.pow(x, n);	

	for (var i = 0; i < (n-1); i++) {
		//x = x * 2;
		y = y + x;
		x = (newx)/( x + n);
	}
	y = y + x;

	console.log('From calcWhile x = ' + x);
	console.log('From calcWhile y = ' + y);

	return y;
}
