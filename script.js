//your JS code here. If required.
const para = document.getElementById("status");
const button = document.getElementById("enterBtn")
const body = document.body;
button.addEventListener("click",()=>{
	const head = document.createElement("h1");
	head.id="status"
	head.innerText="Entered Metaverse"
	body.insertBefore(head,para);
	para.remove()
})