
window.onload = function(){
	const style= document.createElement('script');
  style.innerHTML = "";
    document.body.appendChild(style); 
	Main();
}
window.onerror = function(){
	/*document.body.innerHTML = `
	<p style="left:50%; transform: translate(-50%, -45%); top:50%; position:fixed;">An error ocurred.</p>
	`;*/
}
var i = 0;
function load(obj){
	
	const act = obj['home'];
     const _ACTIVITY = document.createElement("div");
        _ACTIVITY.classList = "activity";
        _ACTIVITY.setAttribute("id",act.name);
        _ACTIVITY.innerHTML=`
        <div class="content" >${act.code}</div>`;
    document.body.appendChild(_ACTIVITY);
	activitiesHistory.push(act.name);
	refreshRippleElements();
     const new_style = document.createElement("link");
    new_style.setAttribute("href",obj.style);
    new_style.setAttribute("rel","stylesheet");
    document.getElementById("dreble_themes").appendChild(new_style);


}
var activitiesHistory = [];
class Navbar extends  HTMLElement {
    constructor(activity,id,position,code) {
    	super();
    	
    	if(activity!=undefined){ //Created from JavaScript
    	const page = document.getElementById(activity);
    	const nav = document.createElement("div");
            nav.classList = "navbar";
            nav.id = id;
            nav.setAttribute("pos",position),
            nav.innerHTML = code;
            page.insertBefore(nav,page.children[0]);    
        }

    }
    connectedCallback(){  //Created from html
  
			const page = document.getElementById(this.getAttribute("activity"));
			this.remove();
            const nav = document.createElement("div");
            nav.classList = "navbar";
            nav.id = this.getAttribute("id");
            nav.setAttribute("pos",this.getAttribute("position")),
            nav.innerHTML = this.innerHTML;
            page.insertBefore(nav,page.children[0]);	
	         
    }

}
window.customElements.define('d-navbar', Navbar);

function activity(name,code){
    this.name = name;
    this.code = code;
    this.launch = function(_config){
        const _ACTIVITY = document.createElement("div");
        _ACTIVITY.classList = "activity";
        _ACTIVITY.setAttribute("id",this.name);
        _ACTIVITY.innerHTML=`
        <div class="content" >${this.code}</div>
        `
        document.body.appendChild(_ACTIVITY);
        document.getElementById(this.name).style = `animation: _activity_${_config.animation} 0.25s;`;
        activitiesHistory.push(this.name);
        refreshRippleElements();
    }
   
}
class FloatingButton extends  HTMLElement {
    constructor() {
        super();
    } 
    connectedCallback(){
        const button = document.createElement("button");
        if(this.classList.contains("disabled")===false) {
            button.setAttribute("class"," ripple FloatingButton "+this.getAttribute("class"));
        }else{
            button.setAttribute("class"," FloatingButton "+this.getAttribute("class"));
        }
      	button.setAttribute("pos",this.getAttribute("pos"));
        button.setAttribute("size",this.getAttribute("size"));
      	button.setAttribute("id",this.id);
        if(this.getAttribute("text")== null){
            button.innerHTML = ".";
            button.style = "background-image: url(" + this.getAttribute("src") +") ; background-repeat: no-repeat; background-position: center; font-size: 0;"; 
        }else{
            button.innerHTML = this.getAttribute("text");
            button.style = "background-image: url(" + this.getAttribute("src") +") ; background-repeat: no-repeat; background-position: center; font-size: 15px;"; 
        }
        if(this.classList.contains("disabled")=== false) button.setAttribute("onclick",this.getAttribute("onclick"));
        
        this.parentElement.parentElement.appendChild(button);    
        this.remove();
        console.log(this);   
        button.addEventListener('click', newRipple); 
         
   }
}
window.customElements.define('custom-floating-button', FloatingButton);



function goActivity(act,type){

	document.body.appendChild(act);
	//document.getElementById(act.children[0].id).classList.add("on_opening");
	document.getElementById(act.children[0].id).style = "animation: _activity_"+type+" 0.25s;";
	activitiesHistory.push(act.children[0].id);
	console.log(activitiesHistory);
	refreshRippleElements();
}
function closeActivity(act,type){
	if(document.getElementById(act)===null) {
		error("Tried to close an activity which doesn't exist by the id: '"+act+"'. Tried while being on the activity '"+activitiesHistory[activitiesHistory.length-1]+"'");
		return;
	}
	document.getElementById(act).style = " animation: _activity_"+type+" 0.25s;";
	setTimeout(function(){ 
		document.getElementById(act).remove();
		activitiesHistory.pop();
	 }, 230);
}

function refreshRippleElements(){

const buttons = document.getElementsByClassName('ripple');
 Array.prototype.forEach.call(buttons, function (b) {
 	b.addEventListener('click', newRipple); }); 
}
 

 function newRipple (e) { 
	 	var circle = document.createElement('div'); 
	 	this.appendChild(circle);
	  var d = Math.max(this.clientWidth, this.clientHeight); 
	  circle.style.width = circle.style.height = d + 'px'; 
	  var rect = this.getBoundingClientRect(); 
	  circle.style.left=e.clientX-rect.left-d/2+'px'; 
	  circle.style.top=e.clientY-rect.top-d/2+'px';
	  circle.classList = "ripple circle_ripple";
 };

function error(message){
	console.error("Dreble > "+message);
}

const root = document.documentElement;
var Names = [];
var PrimaryColors = [];
var SecondaryColors = [];
var LightPrimaryColor = [];
var BackgroundColor = [];
var RippleEffectColor = [];
function newTheme($configTheme){
    Names.push($configTheme["Name"]);
    PrimaryColors.push($configTheme["Primary"]);
    SecondaryColors.push($configTheme["Secondary"]);
    LightPrimaryColor.push($configTheme["Light"]);
    BackgroundColor.push($configTheme["Background"]);
    RippleEffectColor.push($configTheme["RippleEffect"]);
}
function setTheme(newTheme){
    switch(newTheme){
        case "Blue":
        root.style.setProperty('--PrimaryColor', "#2979ff");
        root.style.setProperty('--SecondaryColor', "#1565c0");
        root.style.setProperty('--LightPrimaryColor', "#75a7ff");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Red":
        root.style.setProperty('--PrimaryColor', "#d50000");
        root.style.setProperty('--SecondaryColor', "#b71c1c");
        root.style.setProperty('--LightPrimaryColor', "#ff8a80");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Green":
        root.style.setProperty('--PrimaryColor', "#00c853");
        root.style.setProperty('--SecondaryColor', "#43a047");
        root.style.setProperty('--LightPrimaryColor', "#00e676");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Purple":
        root.style.setProperty('--PrimaryColor', "#6200ea");
        root.style.setProperty('--SecondaryColor', "#673ab7");
        root.style.setProperty('--LightPrimaryColor', "#b388ff");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Orange":
        root.style.setProperty('--PrimaryColor', "#ff5722");
        root.style.setProperty('--SecondaryColor', "#e64a19");
        root.style.setProperty('--LightPrimaryColor', "#ffab91");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        default:
            for( i = 0; i < PrimaryColors.length; i++){ 
                if(Names[i] ==newTheme){
                    root.style.setProperty('--PrimaryColor', PrimaryColors[i]);
                    root.style.setProperty('--SecondaryColor', SecondaryColors[i]);
                    root.style.setProperty('--LightPrimaryColor', LightPrimaryColor[i]);
                    root.style.setProperty('--BackgroundColor', BackgroundColor[i]);
                    root.style.setProperty('--RippleEffect', RippleEffectColor[i]);
                }else{
                    $error("There isn't any theme called < "+newTheme+" >. Define it using 'newTheme()' method.");
                }
            }
    }
}

function newDialog(activity,code){
	const page = document.getElementById(activity);
	const dialog = document.createElement("div");
	const background = document.createElement("div");
	const dialog_window = document.createElement("div");
	const dialog_id = Math.random();
	dialog_window.classList = "dialog_window";
	background.classList = "dialog_background";
	background.setAttribute("onclick","closeDialog(this)")
	dialog.classList = "dialog";
	dialog.setAttribute("id",dialog_id); //Assigns a random ID
	dialog_window.innerHTML += code;
	dialog_window.setAttribute("toclose",dialog_id); //Assign it's parent ID if they need to remove it
	background.setAttribute("toclose",dialog_id);	//Assign it's parent ID if they need to remove it
	dialog.appendChild(background);
	dialog.appendChild(dialog_window);
	page.appendChild(dialog);
}
function closeDialog(me){
	document.getElementById(me.getAttribute("toclose")).remove();
	
}


function Menu(activity,code){
	const page = document.getElementById(activity);
	const menu =document.createElement("div");
	const background = document.createElement("div");
	const menu_window = document.createElement("div");
	const menu_id = Math.random();
	background.classList = "menu_background";
	background.setAttribute("onclick","closeMenu(this)")
	menu.classList = "menu";
	menu.setAttribute("id",menu_id); //Assigns a random ID
	menu_window.classList = "menu_window";
	menu_window.innerHTML = code;
	menu_window.setAttribute("toclose",menu_id);	//Assign it's parent ID if they need to remove it
	background.setAttribute("toclose",menu_id);	//Assign it's parent ID if they need to remove it
	menu.appendChild(background);
	menu.appendChild(menu_window);
	page.appendChild(menu);

}

function closeMenu(me){
	const menu = document.getElementById(me.getAttribute("toclose"));
	menu.classList.add("hiding");

	setTimeout(function(){ 
		menu.remove();
	 }, 180);
	
}
function FloatingButton2(obj){ 
  	const _fbtn = document.createElement("button");
  	_fbtn.setAttribute("size",obj.size);
  	_fbtn.setAttribute("src",obj.icon);
  _fbtn.classList = "FloatingButton";
  	_fbtn.setAttribute("pos",obj.position);
  	document.getElementById(obj.activity).appendChild(_fbtn);
  
}