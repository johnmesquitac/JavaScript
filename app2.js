//CSS properties
/*

el.style.color=  "white";
el.style.width= "200px";

el.style.cssText = "background: blue; color: white; width:200px";
el.style.cssText += "height:200px";*/

//var el = document.getElementById('style') ;
//el.style.background = "blue";
//console.log(getComputedStyle(el));

// event handlers
/*var select = document.getElementsByName('cars')[0];

select.onclick = function(event){
    console.log(event);
}

function ClickCallBack(event){
    console.log('clicked by eventlistener');
}

select.addEventListener('click',ClickCallBack);
select.removeEventListener('click', ClickCallBack);*/

/*var element = document.createElement('div');
element.style.cssText="width:200px; height:20px;background:blue;";

element.onclick = function(){
    alert('hello');
};

//document.body.appendChild(element);

var target = document.getElementById('yellow');
document.body.insertBefore(element,target);*/


//FINAL PROJECT

function set()
{
    let elements = 
    document.getElementsByName('cssProperty');
   // console.log(elements);
    let div = document.getElementById('modify');
    
    for(let index = 0; index < elements.length; index++){
      let cssProperty = elements[index].getAttribute('id');
      let cssValue = elements[index].value;
     
     // console.log(cssProperty,cssValue);
    
      div.style[cssProperty]=cssValue;
    }
}

document.getElementById('set').addEventListener('click',set)
