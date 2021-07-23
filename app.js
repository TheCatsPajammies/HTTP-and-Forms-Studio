		// TODO: create a handler
window.addEventListener("load", function(){
            // TODO: register the handler
    let actions = {
            "google": "https://www.google.com/search?q=",
            "duckduckgo": "https://duckduckgo.com/",
            "bing": "https://www.bing.com/search?q=",
            "ask": "https://www.ask.com/web?q="
    }
    
    document.addEventListener("submit", function() {
        
        function radioChecker() {
            let radios = document.getElementsByName("engine");
            for (let i=0; i < radios.length; i++) {
                if (radios[i].type == 'radio' && radios[i].checked) {
                    return true;
                }
            }
            return false;
        }
        if (document.getElementById('query').value === "") {
            alert("Please add a search query!")
            event.preventDefault();
        } else if (radioChecker() === false) {
            alert("Please choose a search engine!")
            //event.preventDefault();
        }
    
        let searchQuery = document.getElementById('query').value;
        let searchEngineChoice = document.querySelector('input[name=engine]:checked').value;
        let submissionForm = document.getElementById("searchForm");
        //let formAction = `${actions[searchEngineChoice]}${searchQuery}`;
        //submissionForm.action = formAction;
        submissionForm.setAttribute("action", `${actions[searchEngineChoice]}${searchQuery}`);
        console.log(submissionForm);
    })
});