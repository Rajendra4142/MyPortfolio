function typing() {
    const text = 'I am Rejendra Shrestha';
    const typingElement = document.getElementById('typing-text')
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay)

}

function typeText(text, typingElement, typingDelay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i)
        }, typingDelay * i);
    }
}

document.addEventListener('DOMContentLoaded', typing)





const logo = document.querySelector('.flower-logo');
  const container = document.querySelector('.flower-container');

  function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = '🌸🌸';

    // Random position near the logo
    const rect = logo.getBoundingClientRect();
    flower.style.left = rect.left + rect.width / 2 + (Math.random() * 40 - 20) + 'px';
    flower.style.top = rect.top + window.scrollY + 'px';

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 300000); // Remove after animation
  }

  setInterval(createFlower, 500);




  


const firstNameInput  = document.getElementById('firstName');
  const emailInput      = document.getElementById('email');
  const messageInput    = document.getElementById('message');
  const sendMessageBtn  = document.getElementById('sendMessageButton');

  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
  }

  function validateForm() {
    const firstNameVal = firstNameInput.value.trim();
    const emailVal     = emailInput.value.trim();
    const messageVal   = messageInput.value.trim();

    
    if (!firstNameVal || !emailVal || !messageVal) {
      alert('Please fill in all fields.');   
      return false;
    }

    
    if (!isValidEmail(emailVal)) {
      alert('Please input the correct email address.');  
      return false;
    }

    
    alert('Send message is success!');   
    return true;
  }

 
  sendMessageBtn.addEventListener('click', function (event) {
    event.preventDefault();              
    console.log('Button clicked!');      

    if (validateForm()) {
      console.log('Form submitted:', {
        firstName: firstNameInput.value,
        email:     emailInput.value,
        message:   messageInput.value
      });

      
    }
  });





  //darkmod
  const icon = document.getElementById("darkModeIcon");

  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // icon toggle (moon <-> sun)
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });




