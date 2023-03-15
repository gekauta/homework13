let age = +prompt('Введите ваш возраст','0');
function ageStr(age) {
    if (!isNaN(age)){
                count = age % 10;
        if (count >=5 && count <= 20){
            text= " лет";
        }
        else if (count===1){
            text= 'год';
        }
        else if ( count>=2 && count<=4){
            text = "года";
        }
        else { text= 'лет';
        }
      return age +" "+ text;
    }
    else('Вы ввели не число!')
}
alert(ageStr(age));