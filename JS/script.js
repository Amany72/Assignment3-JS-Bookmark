var bookmarkName=document.getElementById("bName");
var bookMarkURL=document.getElementById("bURL");
var bookmarkList;

if(localStorage.getItem('BookmarkSite')==null){
bookmarkList=[];
}
else{
  bookmarkList=JSON.parse(localStorage.getItem('BookmarkSite'));
  display();
}

//Creat Function
function createBookmark(){

var BookMark={
     BookName:bookmarkName.value,
      BookURL:bookMarkURL.value
}
    
    bookmarkList.push(BookMark);
    localStorage.setItem('BookmarkSite',JSON.stringify(bookmarkList));
    display();
    reset();
}

// Display Function 
function display(){
var trs=``;
for(var i=0; i<bookmarkList.length;i++){
trs+=`
<tr> 
<td>${i+1}</td>
<td>${bookmarkList[i].BookName}</td>
   
<td><button class="btn btn-visit "><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
<td><button class="btn btn-delte btn-danger" onclick="delte(${i})"><i class="fa-solid fa-trash-can pe-2"></i> Delete </button></td>
</tr> 
`
}
document.getElementById("bookmarkBody").innerHTML=trs;
}



//Delete Function
  function delte(index){
  bookmarkList.splice(index,1);
  localStorage.setItem('BookmarkSite',JSON.stringify(bookmarkList))
  display();
    }

   // clear 
  function reset(){
    bookmarkName.value='';
    bookMarkURL.value='';
  }

  //validation
//   addBtn.onclick=function(){
// if(bNameValidation() ===true){
//   if(addBtn.innerHTML=== 'submit'){
//     createBookmark()
//   }
// localStorage.setItem('BookmarkSite',JSON.stringify(bookmarkList));
// display();
// reset();
// }else{
//   alert('enter a valid input');
// }






   //validation For Name 
    function bNameValidation(){
    var nameRegex= /^[A-Z][a-z]{5,15}$/;
    var validName =bookmarkName.value;
    if( nameRegex.test(validName)){
      // console.log('match');
      return true;
    }else{
      // console.log('No match');
      return false;
    }
    }
