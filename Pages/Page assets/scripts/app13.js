let filterinput = document.getElementById("filter");

filterinput.addEventListener('keyup' , filternames);

function filternames(){
    let filtervalue = document.getElementById("filter").value.toUpperCase();
    
    let ul = document.getElementById("names");
    
    let li = ul.querySelectorAll("li.country-names");

    for(let i=0 ; i<li.length ; i++){
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }
}