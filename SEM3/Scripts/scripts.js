//Задание №2 - вычислить результат 158+2 и вывести значение выражения в диалоговое окно.
//alert(`Результат" ${158 + 2}`);

//Задание №3 - передать строковый параметр в диалоговое окно. Например, вывести «Привет, Алевтина!», где имя — это передаваемый параметр.
//let name = "Alyona";
//alert(`Hello, ${name}`);

//Задание №4 - вызвать диалоговое окно с заголовком «Как вас зовут?» и подсказкой «Имя» в поле ввода. Затем вывести имя, которое ввели.
//let name = prompt('ВВедите имя', "Alyona");
//alert(`Hello,  ${name}`);

//Задание №5 - написать функцию, выводящую в диалоговом окне текст и переменную. Например, «Привет, Алевтина». Где «Алевтина» — это внешняя переменная.

//let name = "Alyona";
//function show_msg (){
//   let text = "Hello, "+ name+ "!" ;
//    prompt(text);
//}
//show_msg();

//Задание №6 - вывести на экран в диалоговом окне текст с сообщением “Вы уверены?” и кнопками «ОК» , «Отмена».
//alert(confirm("Are you sure?") ? "fine" : "go rest");

function getValue(){
    var InputValue = document.getElementById("my_input").value;
    alert(InputValue);
}