    const texts = document.querySelector('.texts');
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    const recognition = new window.SpeechRecognition();
    
    recognition.interimResults = true;
    
    var p = document.createElement('p');
    
    recognition.addEventListener('result', (e) => {
    window.scrollTo(0, document.body.scrollHeight);
      const text = Array.from(e.results) 
      .map(result => result[0])        
      .map(result => result.transcript) 
      .join('');
      p.innerText = text;
      texts.appendChild(p); 
      
      if(e.results[0].isFinal) {
        if(text.includes('Hello') || text.includes('hello')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Hi !";
        texts.appendChild(p)
        
        
        
        
      }
      
      if(text.includes('What is your name') || text.includes('what is your name') || text.includes("what's your name" ) || text.includes("What's your name") || text.includes("Who are you") || text.includes("who are you") || text.includes("do you have a name") || text.includes("Do you have a name")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "I am BRHH";
        texts.appendChild(p)
      }
      if(text.includes('open YouTube') || text.includes('Open YouTube')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Opening...";
        texts.appendChild(p)
        window.open('https://www.youtube.com')
      }
      if(text.includes('facebook.com') || text.includes('Facebook.com') || text.includes('Open Facebook') || text.includes('open Facebook')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Opening Facebook...";
        texts.appendChild(p)
        window.open('https://m.facebook.com')
      }
      if(text.includes('Tell me about yourself') || text.includes('tell me about yourself')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Hi ! I am a chatbot. I am available to serve you. ";
        texts.appendChild(p)
      }
      if(text.includes('stop now') || text.includes('Shut up') || text.includes('shut up')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "sorry ! ";
        texts.appendChild(p)
      }  
      
      if(text.includes('my name is') || text.includes('My name is') || text.includes('I am ')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "okay";
        texts.appendChild(p)
        
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Doesn't matter.", p;
        texts.appendChild(p)
        
      }  
      if(text.includes('Who made you') || text.includes('who made you') || text.includes("Who is your creator") || text.includes("who is your creator") || text.includes("Who invented you") || text.includes("who invented you") || text.includes("Who is your inventor")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Muhammad S. M. SAROWAR HOSEN coded me. ";
        texts.appendChild(p)
      }  
      if(text.includes('Who is Sarovar') || text.includes('Tell me about Sarowar') || text.includes("tell me about Sarowar") || text.includes("Tell me about your inventor") || text.includes("Tell me about your creator") || text.includes("Sarwar")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Muhammad S. M. SAROWAR HOSEN is my inventor. He is a student and a programmer. No more, cause my Author doesn't want me to share his BioData to anybody.";
        texts.appendChild(p)
      }  
      if(text.includes('Who is Eva') || text.includes('who is eva') || text.includes("Who is eva") || text.includes("about eva") || text.includes("about Eva") || text.includes("Eva") || text.includes("eva")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Eva or ইভা হচ্ছে সারোয়ার এর বড় ভাগ্নি। ইভা এখন শিশু শ্রেণীতে পড়াশোনা করে। ";
        texts.appendChild(p) 
      } 
      if(text.includes('do you know me') || text.includes('Do you know me') || text.includes('Do you know who I am')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "No";
        texts.appendChild(p)
       
        
      }  
      if(text.includes('Fuck you') || text.includes('fuck you') || text.includes("f*** you") || text.includes("F*** you") || text.includes("f*** your") || text.includes("f*** yourself")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "My Boss will Fuck you";
        texts.appendChild(p)
      }  
      
      if(text.includes('Who is your boss') || text.includes('who is your boss') || text.includes("Who is your Boss") || text.includes("your boss") ) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Muhammad S. M. SAROWAR HOSEN is my Boss.";
        texts.appendChild(p)
      }  
      
     /* if(text.includes('') || text.includes('') || text.includes(" ") || text.includes(" ") || text.includes(" ") || text.includes(" ") || text.includes(" ")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Muhammad S. M. SAROWAR HOSEN coded me. ";
        texts.appendChild(p)
      }  
      */
      if(text.includes('contact') ) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "I only have my boss's facebook account";
        texts.appendChild(p)
        window.open('https://www.facebook.com/sarowar6362')
      }  
      if(text.includes('Are you listening')  || text.includes('are you listening') || text.includes('do you hear me') || text.includes('Do you hear me')){
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "I am listening.";
        texts.appendChild(p)
        
      }  
      if(text.includes('can you talk') || text.includes('cannot you talk') || text.includes("Can you talk") || text.includes("Cannot you talk") || text.includes("talk to me") || text.includes("Talk to me") || text.includes("speak up")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Sorry ! Now I can't talk. But my boss is working to make me talk.";
        texts.appendChild(p)
      }  
      if(text.includes('boss has girlfriend') ) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "No, not yet.";
        texts.appendChild(p)
      }  
      if(text.includes('what is love') ) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Love is an intense feeling of deep affection";
        texts.appendChild(p)
      }  
      if(text.includes('Hi') || text.includes('hi') ) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "Hello !";
        texts.appendChild(p)
      }  
      if(text.includes('what can you do') || text.includes('What can you do') ) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "I can catch your speeches.";
        texts.appendChild(p)
      }  
      
      
      
        p = document.createElement('p') 
      }
      
      
    
     
     
     
        
    });
    recognition.addEventListener('end', (e) => {
      
    recognition.start();
    window.scrollTo(0, document.body.scrollHeight);
    })
    
    recognition.start();
    window.scrollTo(0, document.body.scrollHeight);