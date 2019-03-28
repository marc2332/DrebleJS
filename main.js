

const HomeAct = new activity({name:"Home",code:`

	<d-navbar activity="Home" position="top">
		<navbar-title> Main Activity </navbar-title>
	</d-navbar>
	<p>Scroll down</p>
	<i class="spacer"></i>
	<button class="ripple" onclick="createDialog1()">Open dialog</button>


	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.
	</p>
	<button onclick="onTest()">test</button>
	<button onclick="onActivity2()">config</button>
	<button onclick="onActivity3()">Counter</button>

	`});
function createDialog1(){
	newDialog('Home',`

		<dialog-title>Testing Dialogs</dialog-title>

		`);
}
function createAppDrawer1(){
	new Menu("config",`
		<p>Side menu!</p>
		<button onclick="closeActivity('config','slide_right')">close activity</button>
		

		`);
}
function Main(){

	colors = {
        Name : 'purple',
        Primary : 'purple',
        Light: 'lightpink',
        Secondary: 'red',
        Background: 'purple',
        RippleEffect : 'yellow'
    }
    newTheme(colors);
    setTheme("Purple");	

	load({
		home: HomeAct,
		style:"dreble.css"
	});
		 
}


function onActivity2(){
	const configAct = new activity({name:"config",code:`
	<custom-floating-button src="tick.svg" pos=" bottom right "size=" normal" id="fbtn1" onclick="alert('hi!!')"></custom-floating-button>

	<d-navbar activity="config" position="top">
			<img class="navbar-icon" onclick="createAppDrawer1()" src="menu.svg"></img>
			<navbar-title> Top bar <navbar-title>
	</d-navbar>

	<p>Configuration Page</p>

	<button class="ripple" >example</button>
	<button class="ripple" onclick="closeActivity('config','slide_right')">back</button>
	<p>Click the floating button</p>
	
	`});
	configAct.launch({
  	animation:"expand"
  })

}
function onTest(){
	const testAct = new activity({name:"test",code:`
	<d-navbar activity="test" position="top">
			<navbar-title> Test <navbar-title>
	</d-navbar>	
	<button class="ripple" onclick="closeActivity('test','slide_down')">go back</button>
	`});
	testAct.launch({
  	animation:"slide_up"
  })

}


let _counter = 0;
function onActivity3(){
	const counter = new activity({name:"counter",code:`

		<custom-floating-button src="plus.svg" pos="bottom left " size=" normal" id="fbtn2" onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;"></custom-floating-button>

		<d-navbar activity="counter" position="top">
			<navbar-title> Top bar <navbar-title>
		</d-navbar>

		<p id="_counter">Pressed: `+_counter+`</p>
		<button onclick="closeActivity('counter','slide_right')">Go back</button>
		<button onclick="onActivity2()">config</button>
		
	`});
  counter.launch({
  	animation:"slide_left"
  })
	//goActivity(counter,"slide_up");
  /*const floating1 = new FloatingButton2({
  	icon:"plus.svg",
  	position:"top center",
  	size:"normal",
  	onclick:"console.log",
  	activity:"counter",
	
	})*/
}



