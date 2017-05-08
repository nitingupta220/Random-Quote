var quotes = ["Be the change you wish to see.", "Social progress can be measured by the social position of the female sex.", "I like the religion that teaches liberty, equality and fraternity.", "If you tremble with indignation at every injustice then you are a comrade of mine.", "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me."];

var authors = ["Mahatma Gandhi", "Karl Marx", "B. R. Ambedkar", "Ernesto Che Guevara", "Abdul Kalam"];

var i = 0;

var bgColors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];


function changeQuote() { "use strict";
        var i = Math.floor(Math.random() * 5);
        var a = Math.floor(Math.random() * bgColors.length);
        var b = Math.floor(Math.random() * bgColors.length);
        i += 1;
        if (i === quotes.length) {
        i = 0;
    }
                        
                        
    document.getElementById("talks").innerHTML = quotes[i];
    document.getElementById("author").innerHTML = authors[i];
    document.getElementById("flex-container").style.backgroundColor = bgColors[a];
    document.getElementById("quote").style.backgroundColor = bgColors[b];

                       }
