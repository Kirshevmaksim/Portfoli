let NumCard; //Порядковый номер карты (используется в дата сет)

let infList=[]; // Список с карточками
let infTempl= document.getElementById("inf-Templ").content.children[0]; //Шаблон карточки
let parent= document.querySelector(".parent"); //контейнер для карточек
let input_name_Debit=document.querySelector("input[name=Debit]"); //инпут с текстом дохода
let input_name_Debit2=document.querySelector("input[name=totalDebit]"); //инпут со значением дохода
let input_name_Credit=document.querySelector("input[name=Credit]"); //инпут с текстом расхода
let input_name_Credit2=document.querySelector("input[name=totalCredit]"); //инпут со значением расхода

let year=[]; //массив с объектами newCard (набором значений для каждой карточки)
let number1=0; //Порядовый номер data-number
/*funct*/
function card() { //Функция создания карточки
	let newElement=infTempl.cloneNode(true); //Клонирует шаблон в новый контейнер
	newElement.dataset.number=number1; //внутри клона меняется data-number
	parent.appendChild(newElement); //Карточка присоединяется на сайт
	infList.push(newElement); //Карточка запихивается в список infList

	let newCard={ // Создается объект со списком всех значений для карты
		totalDebit:0, // Сумма всех доходов
		totalCredit:0, // Сумма всех расходов
		balanceMonth:0 // Остаток
	}
	year.push(newCard); // В массив year пушится newCard(объект со значениями)
	number1++; // Обновляем значение для следующего data-number
}
function addDebit(button_search){ //Функция срабатывает при клике на "добавить доход+" + находит кнопку и записывает в контейнер button_search
	document.querySelector(".addDebit").classList.remove('hide'); //Показываем попап PopUp
	NumCard=button_search.parentElement.parentElement.parentElement.dataset.number; //По кнопке определяем номер карточки с которой будем работать
}
function closeDebit(){ // При нажатии "добавить" в PopUp
	document.querySelector(".addDebit").classList.add('hide'); // Спывается PopUp

	let new_div=document.createElement("div"); //Создается новый див
	new_div.classList.add('inf-common-block'); //К диву добавляем класс inf-common-block
	new_div.classList.add('dox'); //К диву добавляем класс dox для дольнейшего поиска
	infList[NumCard].querySelector("div.inf-common.dox").appendChild(new_div); //Из списка infList находим нужную карточку, а у карточки находим .dox.
//К найденому объекту присоединияем новый див
	var new_p=document.createElement("p"); // Создается текст
	new_p.textContent=input_name_Debit.value; // В качестве текста используем Инпут с названием дохода
	input_name_Debit.value=""; // Отчистили Инпут
	new_div.appendChild(new_p); // К новому диву присоединяется текст

	var new_p=document.createElement("p"); // Создается текст
	new_p.textContent=input_name_Debit2.value+" руб."; // В качестве текста используем Инпут с значением дохода
	year[NumCard].totalDebit+=parseInt(input_name_Debit2.value); // В списке year находим нужный объект и прибовляем к totalDebit значение инпут
	input_name_Debit2.value=""; // Отчистили Инпут
	new_div.appendChild(new_p); // К новому диву присоединяется текст
	infList[NumCard].querySelector("div.inf-rub-color-green").textContent=year[NumCard].totalDebit+ " руб.";
	Ostatok();
}
function addCredit(button_search2){
	document.querySelector(".addCredit").classList.remove('hide');
	NumCard=button_search2.parentElement.parentElement.parentElement.dataset.number;
}
function closeCredit(){
	document.querySelector(".addCredit").classList.add('hide');

	let new_div=document.createElement("div");
	new_div.classList.add('inf-common-block');
	new_div.classList.add('rasx');
	infList[NumCard].querySelector("div.inf-common.rasx").appendChild(new_div);

	var new_p=document.createElement("p");
	new_p.textContent=input_name_Credit.value;
	input_name_Credit.value="";
	new_div.appendChild(new_p);

	var new_p=document.createElement("p");
	new_p.textContent=input_name_Credit2.value+" руб.";
	year[NumCard].totalCredit+=parseInt(input_name_Credit2.value);
	input_name_Credit2.value="";
	new_div.appendChild(new_p);
	infList[NumCard].querySelector("div.inf-rub-color-red").textContent=year[NumCard].totalCredit+ " руб.";
	Ostatok();
}
function Ostatok(){
	year[NumCard].balanceMonth=year[NumCard].totalDebit-year[NumCard].totalCredit;
	infList[NumCard].querySelector("div.inf-rub-color-grey").textContent=year[NumCard].balanceMonth+ " руб.";
}