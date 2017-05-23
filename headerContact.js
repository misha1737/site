function render(margin, text, numberOfBlock=0){
var iconText=document.getElementsByClassName('iconText')[numberOfBlock];
if(!margin){
	iconText.style.visibility="hidden";
	return;
	}
iconText.innerHTML=text;
iconText.style.marginLeft=margin+"px";
iconText.style.visibility="visible";
}

