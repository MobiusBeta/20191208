console.log("\n纪念所有在这些苦难中逝去的生命\n\n");
/* JavaScript written by Ruoxin Mao */
const version = "20w17b";
const splashScreen = "1";

window.oncontextmenu = function() {return false;};
window.onkeydown = function(e) {if ((e.ctrlKey || e.metaKey) && e.keyCode == 83) return false;};
versionInfo.innerText = version;
loadList();
if (splashScreen === "1") {
	setTimeout (function() {
		splashScr.style.opacity = "0";
		setTimeout (function() {
			splashScr.style.display = "none";
		}, 500);
	}, 3500);
} else {
	splashScr.style.display = "none";
}
function loadList() {
	let url = "https://20191208.cn/lists/medical_death_list.json";
	
	fetch(url).then(response => {
		if (response.ok) {
			return response.json();
		}
	}).then(json => {
		totalDeath.innerText = json.length + "位";
		for(let i = 0; i < json.length; i++) {
			const newListItem = document.createElement("div");
			const newListName = document.createElement("div");
			const newDiv = document.createElement("div");
			const newListInnerItem1 = document.createElement("div");
			const newListInnerItemTitle1 = document.createElement("div");
			const newListInnerItemContent1 = document.createElement("div");
			const newListInnerItem2 = document.createElement("div");
			const newListInnerItemTitle2 = document.createElement("div");
			const newListInnerItemContent2 = document.createElement("div");
			const newListInnerItem3 = document.createElement("div");
			const newListInnerItemTitle3 = document.createElement("div");
			const newListInnerItemContent3 = document.createElement("div");
			const newListInnerItem4 = document.createElement("div");
			const newListInnerItemTitle4 = document.createElement("div");
			const newListInnerItemContent4 = document.createElement("div");
			const newListInnerItem5 = document.createElement("div");
			const newListInnerItemTitle5 = document.createElement("div");
			const newListInnerItemContent5 = document.createElement("div");
			const newListInnerItem6 = document.createElement("div");
			const newListInnerItemTitle6 = document.createElement("div");
			const newListInnerItemContent6 = document.createElement("div");
			const newListInnerItem7 = document.createElement("div");
			const newListInnerItemTitle7 = document.createElement("div");
			const newListInnerItemContent7 = document.createElement("div");
			newListItem.classList.add("listItem");
			newListName.classList.add("listName");
			newListName.classList.add("bold");
			newListInnerItem1.classList.add("listInnerItem");
			newListInnerItemTitle1.classList.add("listInnerItemTitle");
			newListInnerItemContent1.classList.add("listInnerItemContent");
			newListInnerItem2.classList.add("listInnerItem");
			newListInnerItemTitle2.classList.add("listInnerItemTitle");
			newListInnerItemContent2.classList.add("listInnerItemContent");
			newListInnerItem3.classList.add("listInnerItem");
			newListInnerItemTitle3.classList.add("listInnerItemTitle");
			newListInnerItemContent3.classList.add("listInnerItemContent");
			newListInnerItem4.classList.add("listInnerItem");
			newListInnerItemTitle4.classList.add("listInnerItemTitle");
			newListInnerItemContent4.classList.add("listInnerItemContent");
			newListInnerItem5.classList.add("listInnerItem");
			newListInnerItemTitle5.classList.add("listInnerItemTitle");
			newListInnerItemContent5.classList.add("listInnerItemContent");
			newListInnerItem6.classList.add("listInnerItem");
			newListInnerItemTitle6.classList.add("listInnerItemTitle");
			newListInnerItemContent6.classList.add("listInnerItemContent");
			newListInnerItem7.classList.add("listInnerItem");
			newListInnerItemTitle7.classList.add("listInnerItemTitle");
			newListInnerItemContent7.classList.add("listInnerItemContent");
			newListName.innerText = json[i].name;
			newListInnerItemTitle1.innerText = "性别";
			newListInnerItemTitle2.innerText = "年龄";
			newListInnerItemTitle3.innerText = "职业";
			newListInnerItemTitle4.innerText = "身份";
			newListInnerItemTitle5.innerText = "所在地";
			newListInnerItemTitle6.innerText = "牺牲原因";
			newListInnerItemTitle7.innerText = "牺牲时间";
			newListInnerItemContent1.innerText = json[i].gender;
			newListInnerItemContent2.innerText = json[i].age;
			newListInnerItemContent3.innerText = json[i].occupation;
			newListInnerItemContent4.innerText = json[i].political_identity;
			newListInnerItemContent5.innerText = json[i].location;
			newListInnerItemContent6.innerText = json[i].cause_of_death;
			newListInnerItemContent7.innerText = json[i].date;
			newListInnerItem1.appendChild(newListInnerItemTitle1);
			newListInnerItem1.appendChild(newListInnerItemContent1);
			newListInnerItem2.appendChild(newListInnerItemTitle2);
			newListInnerItem2.appendChild(newListInnerItemContent2);
			newListInnerItem3.appendChild(newListInnerItemTitle3);
			newListInnerItem3.appendChild(newListInnerItemContent3);
			newListInnerItem4.appendChild(newListInnerItemTitle4);
			newListInnerItem4.appendChild(newListInnerItemContent4);
			newListInnerItem5.appendChild(newListInnerItemTitle5);
			newListInnerItem5.appendChild(newListInnerItemContent5);
			newListInnerItem6.appendChild(newListInnerItemTitle6);
			newListInnerItem6.appendChild(newListInnerItemContent6);
			newListInnerItem7.appendChild(newListInnerItemTitle7);
			newListInnerItem7.appendChild(newListInnerItemContent7);
			newListItem.appendChild(newListName);
			newListItem.appendChild(newListInnerItem1);
			newListItem.appendChild(newListInnerItem2);
			newListItem.appendChild(newListInnerItem3);
			newListItem.appendChild(newListInnerItem4);
			newListItem.appendChild(newDiv);
			newListItem.appendChild(newListInnerItem5);
			newListItem.appendChild(newListInnerItem6);
			newListItem.appendChild(newListInnerItem7);
			listBox.appendChild(newListItem);
		}
	});
}
btnScrollDown.onclick = () => {
	window.scrollTo({ 
		top: mainBox.offsetTop, 
		behavior: "smooth" 
	});
}
btnBacktoTop.onclick = () => {
	window.scrollTo({ 
		top: 0, 
		behavior: "smooth" 
	});
}