/* Example of javascript functions

 Example adapted from:
 "Elequent Javascript" 2nd ed. by Marijn Haverbeke
 http://eloquentjavascript.net/03_functions.html


 Exercise 1:

 Modify the code given below so that the hill function makes use of the
 underscore character, just like the flat function does,
 expect the mountain tops will have to be drawn on the previous line of the output.

 Also modify the code so that the following script portion will
 result in the terrain shown.

 //BUILD SCRIPT
 flat(3)
 hill(5);
 flat(2);
 hill(3);
 flat(4);
 hill(0);
 flat(2);
 //END SCRIPT


 function and the program produces the following terrain.

 _____    ___
 ___/     \__/   \____/\__


 Exercise 2:

 Modify the code from exercise 1 so you can have both hills and mountains.
 Mountains are require two output lines.

 After completing exercise 2 the following BUILD SCRIPT portion should produce the output shown.

 //BUILD SCRIPT
 flat(3)
 mountain(3);
 flat(2);
 mountain(0);
 flat(4);
 hill(1);
 flat(1);
 //END SCRIPT


 function and the program produces the following terrain.

 ___
 /   \    /\      _
 ___/     \__/  \____/ \_


 */


var landscape = function () {
    var resultTop= "";
    var resultMiddle = "";
    var resultBottom= "";
    var flat = function (size) {
        for (var count = 0; count < size; count++) {
            resultTop += " ";
            resultMiddle += " ";
            resultBottom += "_";
        }
    };
    var hill = function (size) {
        resultTop += " ";
        resultMiddle += " ";
        resultBottom += "/";
        for (var count = 0; count < size; count++) {
            resultTop += " ";
            resultMiddle += "_";
            resultBottom += " ";
        }
        resultTop += " ";
        resultMiddle += " ";
        resultBottom += "\\";
    };

    var mountain = function (size) {
        resultTop += "  ";
        resultMiddle += " /";
        resultBottom += "/ ";
        for (var count = 0; count < size; count++) {
            resultTop += "_";
            resultMiddle += " ";
            resultBottom += " ";
        }
        resultTop += "  ";
        resultMiddle += "\\ ";
        resultBottom += " \\";
    };

    //BUILD SCRIPT
    flat(3)
    mountain(3);
    flat(2);
    mountain(0);
    flat(4);
    hill(1);
    flat(1);
    //END SCRIPT
    return resultTop + "\n" + resultMiddle + "\n" + resultBottom;


};

console.log(landscape());
//  ___/''''\______/'\_
