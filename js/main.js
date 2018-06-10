		let cul = document.getElementById("crsl"),
	  citem = document.getElementsByClassName("crsl-item"),
	  ww    = window.innerWidth,
	  start = 0,
	  end   = ww,
	  max   = citem.length*ww;

	 //setup the  width of slider wrap 
	/* document.getElementById("slider").style.width = ww+"px";*/

	//setup the width of slider
	cul.style.width = max+"px";

	//set the width of each slider base on window screen
	for (var i = citem.length - 1; i >= 0; i--) {
		citem[i].style.width = ww+"px";
	}

	//create function to animate
	function animate(){

		let frameAnimate  = setInterval(frame, 1);

		//function for frame
		function frame (){

			if(start == end){
				//put margin to 0
				cul.style.marginLeft = "0px";
				// clear the inteval
				clearInterval(frameAnimate);
				//put the 1st slider at the bottom
				cul.appendChild(citem[0]);

				//put the start to zero
				start = 0;


			} else {
				//increment the start by 3
				start +=3;

				cul.style.marginLeft = -start+"px";

			}
		}
	event.preventDefault();
	}


setInterval(animate,7000);


/*Creating div for movie list*/
let wrap = document.getElementById("movielist");

//function for star icon
function star(num,elm) {
		let y = 0;
		while (y < num ) {
			let a = document.createElement("i");
			a.classList.add("fa");
			a.classList.add("fa-star");

			elm.appendChild(a);

			y++
		}	

}


for(i=0; i < movie.length; i++){

		let liItem = document.createElement("div"),
			eltitle = document.createElement("h2"),
			elgenre = document.createElement("h3"),
			ptext = document.createElement("p"),
			elchar = document.createElement("span"),
			elrating = document.createElement("span"),
			img = document.createElement("img"),
			selectElm = document.getElementById("inputlist"),
			b = movie[i].rating;

		elrating.classList.add("rating");
		liItem.classList.add(b);
		eltitle.classList.add("title");
		elgenre.classList.add("genre");
		elchar.classList.add("characters");
		img.classList.add("thumb");

		if(b){
			star(b,elrating);
		}
		
		eltitle.innerText = movie[i].title;
		elgenre.innerText = movie[i].genre;
		elchar.innerText = movie[i].chars;
		img.setAttribute("src", movie[i].thumb);

		function createItem (){
			wrap.appendChild(liItem);
			liItem.appendChild(eltitle);
			liItem.appendChild(elgenre);
			liItem.appendChild(ptext);
			ptext.appendChild(elrating);
			ptext.appendChild(elchar);
			liItem.appendChild(img);
		}

		createItem();
	//For filter the movie list
	selectElm.addEventListener("change", function(){ 
		
		let selectVal = selectElm.value;
		function setCreate () {setTimeout(createItem, 1)};
		
		if (selectVal == b) {
			wrap.innerHTML ="";
			//liItem.style.width =
			setCreate();
			
		}  else if (selectVal == 'all'){
			wrap.innerHTML ="";
			setCreate()
		}	

	})

}