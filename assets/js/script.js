// console.log('--- ' + Date().split(' ')[4] + ' ---');

window.onload = function(){
	getJSON();
	let elemEventsContent = '';
	let elemEvents = $('events');
	// console.log(elemEvents);
	for(let i = 0; i < events.length; i++){
		let content = '<dl><dt>'+ events[i].t +'</dt><dd><span style="color:'+ events[i].cc[0] +';background:'+ events[i].cc[1] +'">'+ events[i].c +'</span></dd><dd>'+ events[i].d +'</dd></dl>';
		elemEventsContent += content;
	}
	elemEvents.innerHTML = elemEventsContent;
}

function getJSON(){
	let req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			// console.log('読み込んだよ');
			events = JSON.parse(req.responseText);
			// console.log(events);
		}
	};
	//下のファイルパスは仮のものであるため、後に正規の場所に移行すること。また、ローカルファイルはブラウザの同一生成元ポリシーにより受け付けられない。
	req.open("GET", "https://sayamaprefectureevent.github.io/EventPage/data/event.json", false);
	// req.open("GET", "", false);
	req.send(null);
}

function $(elemId){
	return document.getElementById(elemId);
}