function getValue(){
    var InputValue = document.getElementById("my_input").value;
    if(InputValue!= ""){
         alert("Данные отправлены");
    }
   else{
    alert("Ошибка. Поле пустое")
   }
}
