function viewMenu(){ 
    $("div#menu").fadeIn(); // fadeIn - плавное появление
    return false; // не производить переход по ссылке
};

function closeMenu(){ 
    $("div#menu").fadeOut(); // fadeOut - плавное исчезновение 
    return false; // не производить переход по ссылке
};
