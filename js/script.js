$(document).ready(function(){
// draggable
$( "#draggable" ).draggable();
// accordian
$( "#accordion" ).accordion({
  collapsible: true,
  heightStyle: "content"
  });
// autocomplete
// var data = [
//   "HTML",
//   "CSS",
//   "PHP",
//   "JS",
//   "JQUERY"
//   ];
//    $( "#c_name" ).autocomplete({
//       source: data
//     });
   // datepicker
   $( "#datepicker" ).datepicker({
    showButtonPanel: true,
     changeMonth: true,
      changeYear: true
   });
   // menu
   $( "#menu" ).menu();
   // tab
   $( "#tabs" ).tabs({
    collapsible: true
   });
   // tooltip
   $( document ).tooltip();
  
   
   



});