//שם פרטי
function FirstName() {
    if (fName.value.length < 2) {
        div1.innerHTML = "יש להכניס לפחות 2 תווים";
        return false;
    }
    else {
        div1.innerHTML = " ";
        return true;
    }
}
//שם משפחה
function LastName() {
    if (lName.value.length < 2) {
        div2.innerHTML = "יש להכניס לפחות 2 תווים ";
        return false;
    }
    else {
        div2.innerHTML = " ";
        return true;
    }
}
//שנת לידה
function Year() {
    if (year.value > 2023 || year.value < 1904) {
        div3.innerHTML = "אנא הכנס שנה תקינה";
        return false;
    }
    else {
        div3.innerHTML = " ";
        return true;
    }
}

//שם משתמש
function user() {
    if (userN.value.length < 3) {
        div4.innerHTML = "יש להכניס לפחות 3 תווים";
        return false;
    }
    else {
        div4.innerHTML = " ";
        return true;
    }
}
//מגדר
function gender() {
    if (female.checked || male.checked || other.checked) {
        div5.innerHTML = " ";
        return true;
    }
    else {
        div5.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}

//סיסמה
function password() {
    if (password1.value.length < 8) {
        div6.innerHTML = "יש להכניס לפחות 8 תווים";
        return false;
    }
    else {
        div6.innerHTML = " ";
        return true;
    }
}
//אימות סיסמה
function passwordVari() {
    if (password1.value == passwordVari1.value) {
        div7.innerHTML = " ";
        return true;
    }
    else {
        div7.innerHTML = "ערך האימות שונה מהסיסמה";
        return false;
    }

}
//תחביבים
function hobbies() {
    if (hobbies1.value.length < 5) {
        div9.innerHTML = "אנא הכנס עוד תחביבים, הערך קצר מידי";
        return false;
    }
    else {
        div9.innerHTML = " ";
        return true;
    }
}
//גיל
function age() {
    if (age1.value > 120 || age1.value < 13) {
        div10.innerHTML = "אנא הכנס גיל תקין, לא ניתן להירשם אם גילך קטן מ13";
        return false;
    }
    else {
        div10.innerHTML = " ";
        return true;
    }
}
//טלפון
function phone() {
    if (phone1.value.length == 9 || phone1.value.length == 10) {
        div11.innerHTML = " ";
        return true;
    }
    else {
        div11.innerHTML = "מספר טלפון לא תקין";
        return false;
    }
}
//אימייל
function email2() {
    if (email1.value == "") {
        div8.innerHTML = " הכנס אימייל תקין"
        return false;
    }
    else {
        div8.innerHTML = " "
        return true;
    }
}
function userName() {
    var userName1 = userN.value;
    mydiv.innerHtml = userName1;
}
//בדיקה סופית
function ending() {
    var result = true;
    result = FirstName() && result;
    result = LastName() && result;
    result = Year() && result;
    result = user() && result;
    result = gender() && result;
    result = password() && result;
    result = passwordVari() && result;
    result = hobbies() && result;
    result = age() && result;
    result = email2() && result;
    result = phone() && result;
    return result;
}

