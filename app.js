!(function() {
    "use strict";

    const Counter = [];

    const DOT_IS_A_CHAR = false;
    const logData = (info) => console.log(info);

    const createCounter = (__p = "Type here..", __t = "text", __a = "off") => {
        let inp = document.createElement("input");
        inp.placeholder = __p;
        inp.type = __t;
        inp.autocomplete = __a;
        inp.style.display = "block";
        inp.style.margin = "1em 0";

        return document.body.appendChild(inp);
    }

    createCounter("#01");
    createCounter("#02");
    createCounter("#03");
    createCounter("#04");

    function displayCounters(i, wc, cc, wc_ws) {
        i.onkeyup = function() {
            let value = this.value.trim();
            let words = value.split(" ");
            // let a = words.filter(function(word) {
            //     if (word !== '') return word;
            // });
            let lastCharDot = words.filter((word) => word.slice(word.length - 1, word.length) === '.');
            let w = words.filter((word) => word !== '');

            // const logWordCount = () => !DOT_IS_A_CHAR ? logData(`Word count: ${w.length}`) : logData(`Word count: ${w.length + lastCharDot.length}`);
            // logWordCount();

            const displayWordCount = () => !DOT_IS_A_CHAR ? wc.innerText = `Word count: ${String(w.length)}` : wc.innerText = `Word count: ${String(w.length + lastCharDot.length)}`; // display func
            displayWordCount(); //display
            //setTimeout(logWordCount, 1000);
            //console.log(`Word count: ${w.length}`); // finding word count

            let val = this.value;
            let char = val.length;

            let valWithNoSpace = val.trim().replace(/\s+/g, "").length;

            char > 0 ? cc.innerText = `Character count(with spaces): ${char}` : cc.innerText = "";
            valWithNoSpace > 0 ? wc_ws.innerText = `Character count(without spaces): ${valWithNoSpace}` : wc_ws.innerText = "";
        }
    }

    // function checkCharCount(i, cc) {
    //     i.onkeyup = function() {
    //         let val = this.value;
    //         let char = val.length;
    //
    //         cc.innerText = `Character count: ${char}`;
    //     }
    // }

    const inputElements = document.querySelectorAll("input");
    //inputElements.forEach((input) => checkWordCount(input));
    inputElements.forEach((input) => {
        // let r = String(Math.floor((Math.random() * new Date().getMilliseconds() * Math.PI)));
        let r = String(Math.floor(Math.random() * 100) * Date.now());
        let b = `i-${r.substring(0, 3)}`;
        input.id = b;

        const createSpan = (c) => { // create span element using function
            let span = document.createElement("span");
            span.dataset.counterInput = b;
            span.className = c;
            input.parentNode.insertBefore(span, input.nextSibling);
        }

        createSpan("word-counter"); // creates word-counter element
        createSpan("character-counter"); // creates character-counter element
        createSpan("word-counter-ws"); // creates character-counter element

        // const wordCounters = document.getElementsByClassName("word-counter");
        // for (let i = 0; i < wordCounters.length; i++) {
        //     let wc = wordCounters[i].id === b;
        //     console.log(wc);
        // }
        let wcSpan = document.querySelector(`[data-counter-input="${b}"].word-counter`); // get word counter span associated with this input
        let ccSpan = document.querySelector(`[data-counter-input="${b}"].character-counter`); // get character counter span associated with this input
        let wcSpan__ws = document.querySelector(`[data-counter-input="${b}"].word-counter-ws`); // get character counter span associated with this input

        Counter.push({
            id: b,
            elem: document.getElementById(b),
            span: {
                wordCount: {
                    withSpaces: wcSpan,
                    withoutSpaces: wcSpan__ws
                },
                charCount: ccSpan,
            }
        });
    });
   console.log(Counter);

   Counter.forEach((object) => {
       const input = object.elem;
       const __wc = object.span.wordCount.withSpaces;
       const __cc = object.span.charCount;
       const __wc_ws = object.span.wordCount.withoutSpaces;

       displayCounters(input, __wc, __cc, __wc_ws);
   });
})()