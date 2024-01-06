
        var navigations = [
            {word:"home", page: "index.html"},
            {word:"contact", page: "contact.html"},
            {word:"about", page: "about.html"},
            {word:"index", page: "index.html"},
            {word:"phone", page: "contact.html"},
            {word:"where", page: "contact.html"},
        ]

        function navigate()
        {
            var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
            var recognition = new SpeechRecognition();

            recognition.continous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            
            recognition.lang ="en-US";
            recognition.start();

            recognition.onresult = function(event)
            {
                let userWord = event.results[0][0].transcript;
                let index = navigations.findIndex(n => (userWord.includes(n.word)));
                alert("You will now be redirected to" + " " + navigations[index].word + " " + "PAge");
                windows.location.href = navigations[index].page;
            }
            
            recognition.onspeechend = function()
            {recognition.stop();}
        }
  