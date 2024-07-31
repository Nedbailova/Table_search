
function myFunction() {
  
  var input, table, div, count;
  input = document.getElementById("input").value; 
  table = document.getElementById("table")
  div = table.getElementsByClassName("row"); 
  button = document.querySelector('button');
  count = 0;
  
  
  
  for(i = 0; i < div.length; i++){
    elem = div[i].getElementsByClassName("cell")[0].textContent; 
    console.log(div[i].getElementsByClassName("cell")[0].querySelector('span'))
    txtValue = elem.toLowerCase().match(input.toLowerCase()); 

    if(txtValue && input!=''){
        count +=1
        div[i].getElementsByClassName("cell")[0].querySelector('span') .innerHTML =  elem.replace(elem.substring(txtValue.index,txtValue.index + input.length),`<span  style="color: red">${elem.substring(txtValue.index,txtValue.index + input.length)}</span>`)
    }
    else{
        div[i].getElementsByClassName("cell")[0].querySelector('span') .innerHTML = `<span >${elem}</span>`;
    }
  }
  
  if(input!=''){
    if (document.getElementById("number_of_matches")) {
      document.querySelector("div").remove();
    }

    if(count > 0){
      button .insertAdjacentHTML('afterEnd', `<div id="number_of_matches" > <span> Количество совпадений: ${count} </span></div>`);
    }
    else{
      button .insertAdjacentHTML('afterEnd', `<div id="number_of_matches" > <span> Ничего не найдено </span></div>`);
    }
  }

  if(input==''){
    if (document.getElementById("number_of_matches")) {
      document.querySelector("div").remove();
    }
  }

  if(input==' '){
    if (document.getElementById("number_of_matches")) {
      document.querySelector("div").remove();
    }
  }
}

