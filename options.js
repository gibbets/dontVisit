let page = document.getElementById('buttonDiv');
let websites = document.getElementById('websites');
  function constructOptions() {
      let button = document.createElement('button');
      button.addEventListener('click', function() {
        chrome.storage.sync.set({'value': 'Test'}, function() {
          console.log('stored item');
        })
		
		
		
		chrome.storage.sync.get('value', function(result) {
			let text = document.createElement('p');
			text.innerHTML = result;
          websites.appendChild(text);
        })
      });
	  
	  
	  
      page.appendChild(button);
    
  }
  constructOptions();