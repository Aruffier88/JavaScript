// 1: Select / (get) the element with the ID 'about'. 
//    Store the element in the variable `about`.


const about = document.getElementById('about');
//	  Use a method to modify the about id with a color border of your choice

about.style.border ='2px solid #d9b0b0';

// 2: Select all the <h2> elements in the document.

document.getElementsByTagName('h2').onmouseover.style.color='red';
//    Using a loop, set the color of the <h2> elements to a different color.

for (var i=0;i<tags.length;i++){
    tags[i].onmouseover = mouseIn;
    tags[i].onmouseout = mouseOut;
}

function mouseIn (element) {
    element.target.style.color = 'red';
}
function mouseOut (element) {
    element.target.style.color = 'inherit';
}


// 3: Select all elements with the class '.card'.


const card = document.querySelectorAll('card');

//    Using a loop, set their background color to the color of your choice.

for (i = 0; i < querySelectorAll.card; i++) {

        queryAll[i].innerHTML = text;


      }

}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
//    Modify the color to one of your choice.

const schedule = document.getElementById('schedule');

schedule.style.color ='red';

ul.style.border = '2px solid #eb3434';  // just need to change the hex value

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.

const container = document.getElementsByClassName('container');


// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.

const title = document.getElementsByTagName('title');

title.style.color ='red';