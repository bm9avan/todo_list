var i =1;
    function app() {
    
        document.getElementById('li').innerHTML=`<input type="text" id="liinput" name="in"> <button name="add" onclick=add()>add</button> <button name="dull" onclick=dull()>dull</button><br>`;
        li.removeAttribute('hidden')
    }
    
    function add() {
        let temp = document.getElementById(`liinput`).value;
        let need= temp;  
        document.getElementById(`do`).innerHTML+=`<div id="spanli${i}"><span>${need}</span>&emsp;<button name="remove" onclick=remove(${i}) id="rem${i}">remove</button></div>`; 
        i++  
    }
    
    function remove(i) {
        let spanli=document.getElementById(`spanli${i}`)
        spanli.setAttribute('hidden', 'true')
        
    }
    function dull(){
        let li=document.getElementById(`li`)
        li.setAttribute('hidden', 'true')
    }
