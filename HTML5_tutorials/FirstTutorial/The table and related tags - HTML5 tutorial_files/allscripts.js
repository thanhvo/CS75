function bookmark_us(url, title){

if (window.sidebar) // firefox
  window.sidebar.addPanel(title, url, "");
else if(window.opera && window.print){ // opera
  var elem = document.createElement('a');
  elem.setAttribute('href',url);
  elem.setAttribute('title',title);
  elem.setAttribute('rel','sidebar');
  elem.click();
}
else if(document.all)// ie
  window.external.AddFavorite(url, title);
}

var lhs = "duncansprivateemail";
var rhs = "gmail.com";

function print_mail_to_link()
{
   document.write("<a class=\"quote\" href=\"mailto");
   document.write(":"+lhs+"@");
   document.write(rhs + "\">"+lhs+"@"+rhs+"<\/a>");
}

var currentTime = new Date();
var year = currentTime.getFullYear();

function print_year()
{
	document.write(year);
}

