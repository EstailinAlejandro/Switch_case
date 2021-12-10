const myAge = prompt("Vul je leeftijd in");

grade = "A"

switch (grade) {
    case "A" :
        
        (myAge >= 16 && myAge < 18) ; {
         alert ("Je bent 16 of ouder, maar niet ouder dan 18")
        break
    }
    case "B" : 
        (myAge < 16) ; {
        alert ("Je bent jonger dan 16 jaar")
        break
        
    }
    case "C" : 
        (myAge == 18) ; {
        alert ("Je bent 18")
        break
        }

    default: 
        (myAge > 18) ; {
        alert ("Je bent ouder dan 18")
        } 
} 