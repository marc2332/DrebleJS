var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on('/counter', function () {
    onActivity3()
  })
  .resolve();



const HomeAct = new Dreble.Activity({
  name: "Home",
  code: `
	<d-navbar position="top">
			<img class="navbar-icon" onclick="createAppDrawer2()" src="assets/menu.svg"></img>
			<d-title> Main Activity </d-title>
	</d-navbar>
	<d-content>
	<div class="card">
			<p>Scroll down</p>
			<div class="spacer"></div>
			<button class="ripple" onclick="createDialog1()">Open dialog</button>
			<button onclick="test.launch({ animation:'slide_up'})"> Test2</button>
	</div>
	<div class="card">
			<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>

			<button onclick="onTest()">test</button>
			<button onclick="onActivity2()">config</button>
			<button onclick="onActivity3()">Counter</button>
	</div>

	</d-content>
	`
})

Dreble.Init({
  home: null,
  root: "root"
})
router
  .on(function () {
    HomeAct.launch("slide_up")
  })
  .resolve()
const test = new Dreble.Activity({
  name: "test",
  code: `
<div content="center-center">
	<div>
		<p>Centered text</p>
		<button class="ripple" onclick="Dreble.closeActivity('slide_down')">close</button>
	</div>
</div>
`
})

function createDialog1() {
  newDialog(
    "Home",
    `

		<dialog-title>Testing Dialogs</dialog-title>

		`
  )
}
function createAppDrawer1() {
  new Menu(
    "config",
    `
		<p>Side menu!</p>
		<button class="ripple" onclick="Dreble.closeActivity('slide_right')">close activity</button>
		`
  )
}
function createAppDrawer2() {
  new Menu(
    "Home",
    `
		<d-list-appdrawer>
				<button class="ripple" onclick="onActivity3()">Counter activity</button>
				<button class="ripple" onclick="closeMenu('Home')">close</button>
				<button class="ripple">Hello world!</button>
				<button class="ripple">Hello world!</button>
		</d-list-appdrawer>
		`
  )
}
const colors = {
  Name: "test",
  Primary: "gray",
  Light: "lightgray",
  Secondary: "lightgray",
  Background: "white",
  RippleEffect: "rgb(0,0,0,0.3)"
}
newTheme(colors)

function onActivity2() {
  const configAct = new Dreble.Activity({
    name: "config",
    code: `
		<d-navbar position="top">
				<img class="navbar-icon" onclick="Dreble.closeActivity('expand_off')" src="assets/arrow_back.svg"></img>
				<d-title> Fixed bar <d-title>
		</d-navbar>
		<d-content>
				<d-navbar position="top">
						<img class="navbar-icon" onclick="createAppDrawer1()" src="assets/menu.svg"></img>
						<d-title> Not fixed bar <d-title>
				</d-navbar>
				<div class="card">
				<p>Configuration Page</p>
					<button class="ripple" >example</button>
				<button class="ripple" onclick="Dreble.closeActivity('expand_off')">back</button>
				<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
				
			
				<p>Click the floating button</p>
				</div>
				<d-fbtn src="assets/tick.svg" pos=" bottom right "size=" normal" id="fbtn1" onclick="alert('hi!!')"></d-fbtn>

		</d-content>
`
  })
  configAct.launch({
    animation: "expand_in"
  })
}
let testAct
function onTest() {
  testAct = new Dreble.Activity({
    name: "test",
    code: `
	<d-navbar position="top" content="center">			
			<d-tabs class="ripple" onclick="testAct.close('slide_down')">return</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab2')">Tab2</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab3')">Tab3</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab4')">Tab4</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab5')">Tab5</d-tabs>
	</d-navbar>	
	
<d-content>
<div>

		<div class="card">
			<p>Tap on some tab!</p>
			
		</div>
		<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
				<button class="ripple" onclick="closeActivity('slide_down')">go back</button>	
</div>
<d-fbtn src="assets/plus.svg" pos="bottom center " size=" normal" id="fbtn2" onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;"></d-fbtn >

	</d-content>


	
	`
  })
  testAct.launch({
    animation: "slide_up"
  })
}

let _counter = 0
function onActivity3() {
  const counter = new Dreble.Activity({
    name: "counter",
    code:
      `

		<d-navbar position="top">
			<img class="navbar-icon" onclick="Dreble.closeActivity('slide_right')" src="assets/arrow_back.svg"></img>
			<d-title> Top bar <d-title>
		</d-navbar>
		<d-content>
				
				<div class="card" content="center">
						<p id="_counter">Pressed: ` +
      _counter +
      `</p>
						<button class="ripple"  onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;">Push up</button>
						<button class="ripple"  onclick="_counter--; document.getElementById('_counter').innerText='Pressed: '+_counter;">Push down</button>
				</div>

				<button onclick="Dreble.closeActivity('slide_right')">Go back</button>
				<button onclick="onActivity2()">config</button>
				<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>

				<d-fbtn src="assets/plus.svg" pos="bottom left " size=" normal" id="fbtn2" onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;"></d-fbtn >

			</d-content>
		
	`
  })
  counter.launch({
    animation: "slide_left"
  })
}
