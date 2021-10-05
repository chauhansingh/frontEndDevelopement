//globle varibles
var S='',SLength=0;
var eColor;
var G_xp,G_yp;
var N=7;

//function to get positions where camel can move in these directions: 'S-E','N-E', 'S-W', 'N-W'
function position(xDir,yDir) {
	var eId;
	G_xp = xDir;
	G_yp = yDir;
	eId = xDir+','+yDir;
	eColor = document.getElementById(eId).style.backgroundColor;

	//positions for S-E direction
	let col=xDir,row=yDir;
	document.getElementById('h1').innerHTML="S-E positions";
	   while(col<N && row>0) {
		   var sE = '';
		   let x = col, y = row;
		   sE = sE.concat((x+1)+','+(y-1));
		   color(x,y);
		   x++;
		   y--;
		   SLength++;
	   }
	   S=S.concat(sE);
	   document.getElementById('p1').innerHTML = sE;
	   sE = '';

	//positions for N-E direction
	 document.getElementById('h2').innerHTML="N-E positions";
	   while(col>0 && row>0) {
		   var nE = '';
		   let x = col, y = row;
		   nE = nE.concat((x-1)+","+(y-1)+" ");
		   color(x,y);
		   x--;
		   y--;
		   SLength++;
	   }
	   S=S.concat(nE);
	   document.getElementById('p2').innerHTML= nE;
	   nE = '';

	//positions for S-W direction
	 document.getElementById('h3').innerHTML="S-W positions";
	   while(col<N && row<N) {
		   var sW = '';
		   let x = col, y = row;
		   sW = sW.concat((x+1)+','+(y+1));
		   color(x,y);
		   x++;
		   y++;
		   SLength++;
	   }
		S=S.concat(sW);
		document.getElementById('p3').innerHTML = sW;
		sW = '';
	
	//positions for N-W direction
	   document.getElementById('h4').innerHTML="N-W positions";
	   while(x>0 && y<N) {
		   var nW = '';
		   let x = col; y = row;
		   s=s.concat((x-1)+','+(y+1));
		   color(x,y);
		   x--;
		   y++;
		   SLength++;
	   }
	   S=S.concat(nW);
	   document.getElementById('p4').innerHTML = nW;
	   nW = '';
	   color(col,row);

}

//function to color possible positons where camel can move
function color(col,row) {
	let s = col+','+row;
	document.getElementById(s).style.backgroundColor="lightgreen";
}

//function to reset color 
function resetColor(z) {
	let s = G_xp+','+G_yp;
	G_xp=0;
	G_xy=0;
	document.getElementById(s).style.backgroundColor=e_color;
	//alert(S);
	let arr =z.split(' ');
	//alert(arr);
	//alert(e_color);
	for(let i=0; i<SLength; i++) {
		document.getElementById(arr[i]).style.backgroundColor=e_color;
	}
	SLength = 0;
	S = '';
	//alert(arr);
}