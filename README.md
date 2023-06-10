# Calculator
This project consists of three parts.
1.
In the html part of the project, the language is English and its direction is left to right.
After that, the topic, which is the calculator, is specified and this file is linked with the styles file.
With the input tag, the buttons that take numbers and operators from the input have been specified.
There are also two buttons named **C** and **Clittle** in this project,
the difference between these two buttons is that C (with the **clearScreen()** function in script.js) clears all input content
and Clittle (with The **Clittle()** function, which is in the script.js section, clears the numbers one by one with each click.
The display() function is for numbers and the amalgar() function is for operators.
At the end, script.js is linked to html.
2.
Colors, margins and sizes are specified in the css file of this project. There are only two important points. In the last part of this code, we have used **active**, which means that when you hold your cursor on a button, its color turns gray, and also used **focus**. This feature helps you to keep buttons color blue when you click on an operator.
3.
The third part of this project is its script file, which consists of several functions and several loops.
In the previous section, the clearScreen() and Clittle() functions were explained.
**change_font()** takes the length of the input and changes the font according to its number.
**tavan_10()** if the length of the input is greater than ten, it divides that number by ten to the power of one less than the length of the number and takes two decimal places. The letter e itself is used to show the number multiplied by the power.
**window.onload = function()** is also used to reload the page.
