
var S="",S_length=0;
var e_color;
var G_xp,G_yp;
function position(X,Y)
{
	G_xp=X;G_yp=Y
	var E_id =""+X+","+Y;
	e_color = document.getElementById(E_id).style.backgroundColor;

	var x=X,y=Y,N=7,s="";

	document.getElementById('h1').innerHTML="S-E positions";
	   while(x<N && y>0)
	   {
		  s=s.concat((x+1)+","+(y-1)+" ");
	      color(x,y);
	      x++;
	      y--;
	      S_length++;
	   }
		color(x,y);
		S=S.concat(s);
		document.getElementById('p1').innerHTML=s;
		s="";

	 x=X;y=Y;
	 document.getElementById('h2').innerHTML="N-E positions";
	   while(x>0 && y>0)
	   {
	      s=s.concat((x-1)+","+(y-1)+" ");
	      color(x,y);
	      x--;
	      y--;
	      S_length++;
	   }
		color(x,y);
		S=S.concat(s);
		document.getElementById('p2').innerHTML=s;
		s="";

	 x=X;y=Y;
	 document.getElementById('h3').innerHTML="S-W positions";
	   while(x<N && y<N)
	   {
	      s=s.concat((x+1)+","+(y+1)+" ");
	      color(x,y);
	      x++;
	      y++;
	      S_length++;
	   }
		color(x,y);
		S=S.concat(s);
		document.getElementById('p3').innerHTML=s;
		s="";

	   x=X;y=Y;
	   document.getElementById('h4').innerHTML="N-W positions";
	   while(x>0 && y<N)
	   {
	      s=s.concat((x-1)+","+(y+1)+" ");
	      color(x,y);
	      x--;
	      y++;
	      S_length++;
   	   }
		color(x,y);
		S=S.concat(s);
   	    document.getElementById('p4').innerHTML=s;
   	    s="";

}
function color(X,Y)
{
	var s="";
	s = ""+X+","+Y;
	document.getElementById(s).style.backgroundColor="lightgreen";
}
function reset_color(z)
{
	let s = ""+G_xp+","+G_yp;
	G_xp=0;
	G_xy=0;
	document.getElementById(s).style.backgroundColor=e_color;
	//alert(S);
	var arr =z.split(" ");
	//alert(arr);
	//alert(e_color);
	for(let i=0; i<S_length; i++)
	{
		document.getElementById(arr[i]).style.backgroundColor=e_color;
	}
	S_length=0;
	S="";
	//alert(arr);
}