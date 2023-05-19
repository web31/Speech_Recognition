    const texts = document.querySelector('.texts');
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    const recognition = new window.SpeechRecognition();
    
    recognition.interimResults = true;
    
    var p = document.createElement('p');
    
    recognition.addEventListener('result', (e) => {
    
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
      
      if(text.includes('What is your name') || text.includes('what is your name') || text.includes("what's your name" ) || text.includes("What's your name") || text.includes("Who are you") || text.includes("who are you")) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "My name is Bot";
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
      if(text.includes('stop now') || text.includes('Shut up')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "sorry ! ";
        texts.appendChild(p)
      }  
      var names;
      if(text.includes('my name is') || text.includes('My name is')) {
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "okay";
        texts.appendChild(p)
        names = p
        p = document.createElement('p') 
        p.classList.add('reply')
        p.innerText = "So your name is ", p;
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
        
        
        p = document.createElement('p') 
      }
      
      
      
    
     
     
     
        
    });
    recognition.addEventListener('end', (e) => {
      
    recognition.start();
    })
    
    recognition.start();