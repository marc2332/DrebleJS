

const HomeAct = new Activity("Home",`

	<d-navbar activity="Home" position="top">
		<img class="navbar-icon" onclick="createAppDrawer1()" src="menu.svg"></img>
		<navbar-title> Main Activity </navbar-title>
	</d-navbar>


	<p>aaaad22</p>
	<i class="spacer"></i>
	<button class="ripple" onclick="createDialog1()">Example</button>
	<p>what's uep</p>
	<button class="ripple">looool</button>
	<p>what's up</p>
	<button class="ripple">Example</button>
	<p>what's up</p>
	<button class="ripple">Example</button>
	<p>what's up</p>
	<button class="ripple">E2x22ample</button>

	<p>WOW2!</p>
	<p>AAAA</p>
	<p>whafft's LOL!!a!</p>
	<p>what's upj</p>
	<p>what's up4</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>
	<p>what's up</p>

	<p>what's up</p>
	<p>bbb</p>
	
	<button onclick="onActivity2()">config</button>
	<button onclick="onActivity3()">Counter</button>

	`);
function createDialog1(){
	newDialog('Home',`

		<dialog-title>Testing Dialogs</dialog-title>
		<button class="ripple">Hello!</button>

		`);
}
function createAppDrawer1(){
	new Menu("Home",`

		<button onclick="onActivity2()">Activity 2</button>
		<p>What's up!!</p>

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
    setTheme("Blue");	

	const config = {
		defaultActivity: HomeAct
	};
	
	load(config);
		 
}


function onActivity2(){
	const configAct = new Activity("config",`
	<custom-floating-button icon-src="tick.svg" class=" pos-bottom pos-right  normal" id="fbtn1" onclick="alert('hi!!')"></custom-floating-button>

	<d-navbar activity="config" position="top">
			<navbar-title> Top bar <navbar-title>
	</d-navbar>

	<p>aaa</p>
	<p>config222</p>
	<p>config</p>
	<p>config</p>
	<p>config</p>
	<p>config</p>
	<p>config</p>
	<p>config</p>
	<p>config</p>
	<button class="ripple" >example</button>
	<button class="ripple" onclick="closeActivity('config','slide_right')">back</button>
	<p>aaa</p>
	
	`);

	goActivity(configAct,"slide_left");

}

var _counter = 0;
function onActivity3(){
	const counter = new Activity("counter",`

		<custom-floating-button src="plus.svg" pos="bottom center " size=" normal" id="fbtn2" onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;"></custom-floating-button>

		<d-navbar activity="counter" position="top">
			<navbar-title> Top bar <navbar-title>
		</d-navbar>

		<p id="_counter">Pressed: `+_counter+`</p>
		<button onclick="closeActivity('counter','slide_down')">Go back</button>
		<button onclick="onActivity2()">config</button>
		
	`);
  
	goActivity(counter,"slide_up");
  const floating1 = new FloatingButton2({
  	icon:"plus.svg",
  	position:"top center",
  	size:"normal",
  	onclick:"console.log",
  	activity:"counter",
	
})
}



