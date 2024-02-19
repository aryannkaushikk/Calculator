var content = document.querySelector("p");

function screen(num){
    if(content.textContent=="0"){
        content.textContent = num;
    }
    else if ((inp[inp.length-1]=="+") || (inp[inp.length-1]=="-") || (inp[inp.length-1]=="*") || (inp[inp.length-1]=="/")){
        if (inp[inp.length-2]==content.textContent){
            content.textContent = num;
        }
        else{
            content.textContent+=num;
        }
    }
    else{
        content.textContent+=num;
    }
}

var inp = [];
var but = document.querySelectorAll("button").length;

for(var i=0; i<but;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(event){
        var eve = event.srcElement.classList[0];
        calc(eve);
    }) 
    
    
}


function calc(key) {
    
    switch (key) {
        case "one": {screen("1"); break;}
        case "two": {screen("2"); break;}
        case "three": {screen("3"); break;}
        case "four": {screen("4"); break;}
        case "five": {screen("5"); break;}
        case "six": {screen("6"); break;}
        case "seven": {screen("7"); break;}
        case "eight": {screen("8"); break;}
        case "nine": {screen("9"); break;}
        case "zero": {screen("0"); break;}
        case "pnt": {screen("."); break;}

        case "add": {inp.push(content.textContent); inp.push("+"); break;}
        case "sub": {inp.push(content.textContent); inp.push("-"); break;}
        case "mul": {inp.push(content.textContent); inp.push("*"); break;}
        case "divi": {inp.push(content.textContent); inp.push("/"); break;}

        case "perc": {inp.push(content.textContent); content.textContent = parseInt(content.textContent)/100; break;}

        case "pm": {content.textContent = ((parseInt(content.textContent))*-1).toString() ; break;}
        
        case "equal": {
            inp.push(content.textContent);
            let result = parseFloat(inp[0]);
            for (var j=1;j<inp.length;j+=2)
            {   
                switch (inp[j]) {
                    case "+": result+=parseFloat(inp[j+1]); break;
                    case "-": result-=parseFloat(inp[j+1]); break;
                    case "*": result*=parseFloat(inp[j+1]); break;
                    case "/": result/=parseFloat(inp[j+1]); break;
                    default: break;
                    }
            }
            inp.splice(0, inp.length);
            if ((result.toString()).indexOf(".")!=-1){
                content.textContent = (result.toPrecision(9)).toString();
            }
            else{
                content.textContent = result.toString();
            }
            break;}

        case "AC": {
            inp.splice(0, inp.length);
            content.textContent = "0";
            break;}
        
        case "C": {
            content.textContent = content.textContent.slice(0,-1);
        }
            default: break;

    }

}

document.addEventListener("keypress",function(event){
    
    switch (event.key) {
        case "1": {screen("1"); break;}
        case "2": {screen("2"); break;}
        case "3": {screen("3"); break;}
        case "4": {screen("4"); break;}
        case "5": {screen("5"); break;}
        case "6": {screen("6"); break;}
        case "7": {screen("7"); break;}
        case "8": {screen("8"); break;}
        case "9": {screen("9"); break;}
        case "0": {screen("0"); break;}
        case ".": {screen("."); break;}

        case "+": {inp.push(content.textContent); inp.push("+"); break;}
        case "-": {inp.push(content.textContent); inp.push("-"); break;}
        case "*": {inp.push(content.textContent); inp.push("*"); break;}
        case "/": {inp.push(content.textContent); inp.push("/"); break;}

        case "%": {inp.push(content.textContent); content.textContent = parseInt(content.textContent)/100; break;}

        case "pm": {content.textContent = ((parseInt(content.textContent))*-1).toString() ; break;}
        
        case "=": {
            inp.push(content.textContent);
            let result = parseFloat(inp[0]);
            for (var j=1;j<inp.length;j+=2)
            {   
                switch (inp[j]) {
                    case "+": result+=parseFloat(inp[j+1]); break;
                    case "-": result-=parseFloat(inp[j+1]); break;
                    case "*": result*=parseFloat(inp[j+1]); break;
                    case "/": result/=parseFloat(inp[j+1]); break;
                    default: break;
                    }
            }
            inp.splice(0, inp.length);
            if ((result.toString()).indexOf(".")!=-1){
                content.textContent = (result.toPrecision(9)).toString();
            }
            else{
                content.textContent = result.toString();
            }
            break;}

        case "a": {
            inp.splice(0, inp.length);
            content.textContent = "0";
            break;}

        case "c": {
            content.textContent = content.textContent.slice(0,-1);
        }
        default: break;
    }
})

