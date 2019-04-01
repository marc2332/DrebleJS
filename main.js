
const HomeAct = new activity({name:"Home",code:`

	<d-navbar position="top">
			<img class="navbar-icon" onclick="createAppDrawer2()" src="menu.svg"></img>
			<navbar-title> Main Activity </navbar-title>
	</d-navbar>
	<d-content>
			<p>Scroll down</p>
			<i class="spacer"></i>
			<button class="ripple" onclick="createDialog1()">Open dialog</button>

			<div class="card">
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>

					<button onclick="onTest()">test</button>
					<button onclick="onActivity2()">config</button>
					<button onclick="onActivity3()">Counter</button>
			</div>

	</d-content>

	`});
function createDialog1(){
	newDialog('Home',`

		<dialog-title>Testing Dialogs</dialog-title>

		`);
}
function createAppDrawer1(){
	new Menu("config",`
		<p>Side menu!</p>
		<button class="ripple" onclick="closeActivity('slide_right')">close activity</button>
		`);
}
function createAppDrawer2(){
	new Menu("Home",`
		<d-list-appdrawer>
				<button class="ripple" onclick="onActivity3()">Counter activity</button>
				<button class="ripple" onclick="closeMenu('Home')">close</button>
				<button class="ripple">Testing</button>
				<button class="ripple">Testing</button>
		</d-list-appdrawer>
		`);
}
	const colors = {
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
		home: HomeAct
	});

function onActivity2(){
	const configAct = new activity({name:"config",code:`

			
			<d-navbar position="top">
					<img class="navbar-icon" onclick="closeActivity('expand_off')" src="arrow_back.svg"></img>
					<navbar-title> Fixed bar <navbar-title>
			</d-navbar>
			<d-content>
					<d-navbar position="top">
							<img class="navbar-icon" onclick="createAppDrawer1()" src="menu.svg"></img>
							<navbar-title> Not fixed bar <navbar-title>
					</d-navbar>
					<div class="card">
					<p>Configuration Page</p>
						<button class="ripple" >example</button>
					<button class="ripple" onclick="closeActivity('expand_off')">back</button>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
					
				
					<p>Click the floating button</p>
					</div>
					<d-fbtn src="tick.svg" pos=" bottom right "size=" normal" id="fbtn1" onclick="alert('hi!!')"></d-fbtn>
	
			</d-content>
	`});
	configAct.launch({
  	animation:"expand_in"
  })
}
let testAct;
function onTest(){
	 testAct = new activity({name:"test",code:`
	<d-navbar position="top" content="center">
			
			
			<d-tabs class="ripple" onclick="testAct.close('slide_down')">return</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab2')">Tab2</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab3')">Tab3</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab4')">Tab4</d-tabs>
			<d-tabs class="ripple" onclick="testAct.content('tab5')">Tab5</d-tabs>

	</d-navbar>	
	
	<d-content>
		<div class="card">
			<p>Tap on some tab!</p>
			<button class="ripple" onclick="closeActivity('slide_down')">go back</button>
		</div>
		<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
					

	<d-content>
	`});
	testAct.launch({
  	animation:"slide_up"
  })

}


let _counter = 0;
function onActivity3(){
	const counter = new activity({name:"counter",code:`

		<d-navbar position="top">
			<img class="navbar-icon" onclick="closeActivity('slide_right')" src="arrow_back.svg"></img>
			<navbar-title> Top bar <navbar-title>
		</d-navbar>
		<d-content>
				
				<div class="card" content="center">
						<p id="_counter">Pressed: `+_counter+`</p>
				</div>
				<button onclick="closeActivity('slide_right')">Go back</button>
				<button onclick="onActivity2()">config</button>
				<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula rutrum convallis aenean, egestas consequat massa sagittis purus tortor accumsan integer magnis class, faucibus enim quis orci facilisis per hendrerit vel velit proin. Dapibus suscipit leo aptent hac litora varius aliquet bibendum donec sollicitudin sed in viverra interdum tempor pharetra augue pellentesque, nibh duis quis sagittis odio gravida blandit class nulla dignissim mollis libero nisl consequat orci ante non. Curae sed vel proin duis suscipit hendrerit varius aliquet, pretium sagittis lectus fames nulla enim penatibus, habitasse malesuada eleifend rutrum nec ut nam.</p>

				<d-fbtn src="plus.svg" pos="bottom left " size=" normal" id="fbtn2" onclick="_counter++; document.getElementById('_counter').innerText='Pressed: '+_counter;"></d-fbtn >

			</d-content>
		
	`});
  counter.launch({
  	animation:"slide_left"
  })
}



