        var i;
        var input;
        var inputArray = new Array();
        var firstInputs = document.getElementById("firstInputs");
        var outputs = document.getElementById("outputs");
        var btnStartInput = document.getElementById("btnStartInput");
        var btnChange = document.getElementById("btnChange");
        
        btnStartInput.onclick = GatherArray(inputArray);        
        
        btnChange.onclick = ChangeMethod;
        
        var outputArray = inputArray.map(swapLetters);
        
        function GatherArray(Array){
            for (i = 0; i < 3; i++){
                var f = i+1;
                input = prompt("Enter word " + f);
                inputArray.push(input);
            }
            firstInputs.innerHTML = "<ul><li>" + inputArray[0] + "</li><li>" + inputArray[1] + "</li><li>" + inputArray[2] + "</li></ul>";
            btnChange.style.display = "block";
            btnStartInput.style.display = "none";
        }
        
        function swapLetters(value, index, array){
            var wordArray = value.split("");
            var first = wordArray[0];
            wordArray[0] = wordArray[(wordArray.length - 1)];
            wordArray[(wordArray.length - 1)] = first;
            var j;
            value = "";
            for(j = 0; j < wordArray.length; j++){
                value += wordArray[j];
            }
            return value;
        }
        
        function ChangeMethod(){
            initialScreen.style.display = "none";
            afterScreen.style.display = "block";
            outputs.innerHTML = "<ul><li>" + outputArray[0] + "</li><li>" + outputArray[1] + "</li><li>" + outputArray[2] + "</li></ul>";
        }  