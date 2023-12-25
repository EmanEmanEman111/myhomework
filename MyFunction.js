  let Product = [];
  function Add_To_My_Cart(Product_name, Product_price, Product_quantity) {
      let add_Product = {
          n: Product_name,
          p: Product_price,
          q: Product_quantity
      };
  
      Product.push(add_Product);
      Shopping_Cart();
  }
  
  function Shopping_Cart() {
      var Shopping_Cart1 = document.getElementById('Shopping_Cart');
      var Rival2 = document.getElementById('Rival');
  
      Shopping_Cart1.innerHTML = '';
  
      var totalAmount = 0;
  
      Product.forEach(function(add_Product) {
          var row = Shopping_Cart1.insertRow();
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = add_Product.n;
          cell3.innerHTML = add_Product.q;
          cell2.innerHTML = add_Product.p;
          cell4.innerHTML = add_Product.p* add_Product.q;
  
          totalAmount += add_Product.p * add_Product.q;
      });
  
      var tax = totalAmount * 0.05;
      totalAmount += tax;
  
      Rival2.textContent = totalAmount;
  }
  //التحقق من الصحة 
  function ChechFormValues(frm) {
    var name = frm.name.value;
    var id = frm.id.value;
    var birth = frm.birth.value;
    var phone = frm.phone.value;
    var email = frm.mail.value;
  
    // تحقق من صحة الاسم
    if (!isValidName(name)) {
      alert("الاسم غير صحيح.");
      frm.name.focus();
      return false;
    }
  
    // تحقق من صحة الرقم الوطني
    if (!isValidNationalID(id)) {
      alert("الرقم الوطني غير صحيح.");
      frm.id.focus();
      return false;
    }
  
    // تحقق من صحة تاريخ الميلاد
    if (!isValidDateOfBirth(birth)) {
      alert("تاريخ الميلاد غير صحيح.");
      frm.birth.focus();
      return false;
    }
  
    // تحقق من صحة رقم الجوال
    if (!isValidMobileNumber(phone)) {
      alert("رقم الجوال غير صحيح.");
      frm.phone.focus();
      return false;
    }
  
    // تحقق من صحة البريد الإلكتروني
    if (!isValidEmail(email)) {
      alert("البريد الإلكتروني غير صحيح.");
      frm.mail.focus();
      return false;
    }
    submitForm()
    return true;
  }
  
  function isValidName(name) {
    // تحقق من صحة الاسم باستخدام regex
    var nameRegex = /^[أ-ي ]+$/;
    return nameRegex.test(name);
  }
  
  function isValidNationalID(id) {
    // تحقق من صحة الرقم الوطني باستخدام regex
    var idRegex = /^(0[1-9]|1[0-4])\d{9}$/;
    return idRegex.test(id);
  }
  
  function isValidDateOfBirth(birth) {
    // تحقق من صحة تاريخ الميلاد باستخدام regex
    var birthRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthRegex.test(birth)) {
      return false;
    }
  
    // تحقق من أن تاريخ الميلاد يسمح بالحد الأدنى والأقصى للعمر
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
  
    var birthYear = parseInt(birth.substring(0, 4));
    var birthMonth = parseInt(birth.substring(5, 7));
    var birthDay = parseInt(birth.substring(8, 10));
  
    var age = currentYear - birthYear;
    if (currentMonth < birthMonth || (currentMonth == birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    var minAge = 18;
    var maxAge = 120;
    return age >= minAge && age <= maxAge;
  }
  
  function isValidMobileNumber(phone) {
    // تحقق من صحة رقم الجوال باستخدام regex
    var phoneRegex = /^09[3-689]\d{7}$/;
    return phoneRegex.test(phone);
  }
  
  function isValidEmail(email) {
    // تحقق من صحة البريد الإلكتروني باستخدام regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

//Captcha انشاء رمز 
var code;
function createCaptcha() {

    var charsArray = "01234578ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha = "";
    for (var i = 0; i < 4; i++) {
        captcha += charsArray[Math.floor(Math.random() * charsArray.length)];
    }
    document.getElementById("captcha").innerHTML = captcha;
    code = captcha;
}

    const myButton = document.getElementById("myButton");
const myForm = document.getElementById("myForm");

myButton.addEventListener("click", function() {
  myForm.style.display = "block";
});

function submitForm() {


  // عرض رسالة تأكيد
  alert("تم الإرسال بنجاح!");
}

