let age = +prompt('Введите возраст',0);
function agestr (age){
    if (age== +age && age){
    let text;
    count = age % 10;
        if (count ==1) {
            text = 'год'}
        else if (count >= 2 && count <=4) {
            text ='года'}
        else {
            text = 'лет'}
        return age+ ' ' + text}
        else{
        return 'Вы ввели не число'
    }};
alert(agestr(age));
