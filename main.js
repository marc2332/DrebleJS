

const HomeAct = new Activity("Home",`

	<d-navbar activity="Home" position="top">
		<img class="navbar-icon" onclick="createAppDrawer1()" src="menu.svg"></img>
		<navbar-title> Main Activity </navbar-title>
	</d-navbar>


	<p>Scroll down</p>
	<i class="spacer"></i>
	<button class="ripple" onclick="createDialog1()">Open dialog</button>


	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.

Himenaeos felis euismod iaculis urna posuere consequat risus fringilla porta imperdiet nisi, non est libero suscipit nullam aenean faucibus cursus vestibulum nascetur, dignissim ultricies placerat lobortis auctor et dictumst nisl curabitur sociis. Volutpat aptent tortor ad vitae varius turpis viverra rutrum non ante, dignissim ullamcorper metus conubia est et lectus id commodo. Quisque odio hac aliquam vestibulum laoreet tincidunt sodales lacinia, feugiat dis suscipit velit arcu dignissim maecenas varius tortor, ad molestie in fermentum ac torquent inceptos. Donec praesent a odio ante dignissim aenean sagittis imperdiet accumsan, fusce tempus ullamcorper interdum tincidunt elementum potenti scelerisque porta lacinia, nulla montes mi egestas cras bibendum curabitur nisi.

Dui bibendum enim sem aliquet primis egestas turpis nibh class scelerisque, non nascetur nam habitant tellus imperdiet dictum tortor vitae fusce semper, sociis magnis rutrum interdum aenean arcu id purus nec. Habitasse ut cursus curae non habitant rutrum senectus aenean risus, ultricies mattis nullam libero velit fusce himenaeos diam ligula, tellus fringilla vivamus per integer massa semper interdum. Congue duis nullam ad laoreet sodales nostra imperdiet, varius pretium in scelerisque metus cursus et vehicula, pulvinar eros purus sapien taciti orci. Eleifend curae elementum augue magnis quam phasellus praesent, conubia vivamus ligula nascetur varius torquent, neque sociis fermentum commodo felis consequat.</p>

	
	<button onclick="onActivity2()">config</button>
	<button onclick="onActivity3()">Counter</button>

	`);
function createDialog1(){
	newDialog('Home',`

		<dialog-title>Testing Dialogs</dialog-title>

		`);
}
function createAppDrawer1(){
	new Menu("Home",`
		<p>Side menu!</p>
		<button onclick="onActivity2()">Activity 2</button>
		

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
	<custom-floating-button src="tick.svg" pos=" bottom right "size=" normal" id="fbtn1" onclick="alert('hi!!')"></custom-floating-button>

	<d-navbar activity="config" position="top">
			<navbar-title> Top bar <navbar-title>
	</d-navbar>

	<p>Configuration Page</p>

	<button class="ripple" >example</button>
	<button class="ripple" onclick="closeActivity('config','slide_right')">back</button>
	<p>Click the floating button</p>
	
	`);

	goActivity(configAct,"slide_left");

}

var _counter = 0;
function onActivity3(){
	const counter = new Activity("counter",`

		<custom-floating-button src="plus.svg" pos="bottom left " size=" normal" id="fbtn2" onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;"></custom-floating-button>

		<d-navbar activity="counter" position="top">
			<navbar-title> Top bar <navbar-title>
		</d-navbar>

		<p id="_counter">Pressed: `+_counter+`</p>
		<button onclick="closeActivity('counter','slide_down')">Go back</button>
		<button onclick="onActivity2()">config</button>
		
	`);
  
	goActivity(counter,"slide_up");
  /*const floating1 = new FloatingButton2({
  	icon:"plus.svg",
  	position:"top center",
  	size:"normal",
  	onclick:"console.log",
  	activity:"counter",
	
	})*/
}



