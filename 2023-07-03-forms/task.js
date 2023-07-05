function itKnowledgeHandler() {
  const itKnowledgeInput = document.querySelector('#it-knowledge');
  const itKnowledgeOutput = document.querySelector('#it-knowledge-output');

  itKnowledgeOutput.textContent = itKnowledgeInput.value;

  itKnowledgeInput.addEventListener('input', () => {
    itKnowledgeOutput.textContent = itKnowledgeInput.value;
  })
}

function formLocalStorage(form) {
  const namesList = ['person-name', 'person-surname', 'person-age', 'person-phone', 'person-email', 'person-it-knowledge', 'student-group', 'student-interest'];

  namesList.forEach(elementName => {
    const localStorageValue = JSON.parse(localStorage.getItem(elementName));

    if (localStorageValue) {
      if (Array.isArray(localStorageValue)) {
        localStorageValue.forEach(value => {
          form.querySelector(`[value="${value}"]`).checked = true;
        })
      } else {
        const inputElement = form[elementName];
        inputElement.value = localStorageValue;
      }
    }
  })

  form.addEventListener('input', (event) => {
    const name = event.target.name;

    if (event.target.type === 'checkbox') {
      const interestInputs = form.querySelectorAll(`[name="${name}"]:checked`);

      const interestsValue = [];

      interestInputs.forEach(interest => {
        interestsValue.push(interest.value);
      })

      localStorage.setItem(name, JSON.stringify(interestsValue));
    } else {
      const value = event.target.value;
      localStorage.setItem(name, JSON.stringify(value));
    }
  })
}

function init() {
  const studentForm = document.querySelector('#student-form');
  
  itKnowledgeHandler();
  formLocalStorage(studentForm);

  studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const nameInput = form.name;
    const surnameInput = form.surname;
    const ageInput = form.age;
    const phoneInput = form.phone;
    const emailInput = form.email;
    const itKnowledgeInput = form['it-knowledge'];
    const groupInputs = form['student-group'];
    const interestInputs = form.querySelectorAll('[name="student-interest"]:checked');

    const nameValue = nameInput.value;
    const surnameValue = surnameInput.value;
    const ageValue = ageInput.value;
    const phoneValue = phoneInput.value;
    const emailValue = emailInput.value;
    const itKnowledgeValue = itKnowledgeInput.value;
    const groupValue = groupInputs.value;
    const interestsValue = [];

    interestInputs.forEach(interest => {
      interestsValue.push(interest.value);
    })

    const studentsList = document.querySelector('#students-list');

    const studentItem = document.createElement('div');
    studentItem.classList.add('student-item');

    const studentNameElement = document.createElement('h2');
    studentNameElement.textContent = `${nameValue} ${surnameValue}`;

    const studentInfoList = document.createElement('ul');

    const studentAgeElement = document.createElement('li');
    studentAgeElement.textContent = `Age: ${ageValue}`;

    const studentPhoneElement = document.createElement('li');
    studentPhoneElement.textContent = `Phone: ****`;

    const studentEmailElement = document.createElement('li');
    studentEmailElement.textContent = `Email: ****`;

    const studentITKnowledgeElement = document.createElement('li');
    studentITKnowledgeElement.textContent = `IT Knowledge: ${itKnowledgeValue}`;

    const studentGroupElement = document.createElement('li');
    studentGroupElement.textContent = `Group: ${groupValue}`;
    
    studentInfoList.append(studentAgeElement, studentPhoneElement, studentEmailElement, studentITKnowledgeElement, studentGroupElement);

    if (interestsValue.length > 0) {
      const studentInterestElement = document.createElement('li');
      studentInterestElement.textContent = `Interests: ${interestsValue.join(', ')}`;
      
      studentInfoList.append(studentInterestElement);
    }

    const privateInfoButton = document.createElement('button');
    privateInfoButton.textContent = 'Show Private Info';

    let privateInfoHidden = true;

    privateInfoButton.addEventListener('click', () => {
      privateInfoHidden = !privateInfoHidden;

      if (privateInfoHidden) {
        studentPhoneElement.textContent = `Phone: ****`;
        studentEmailElement.textContent = `Email: ****`;
        privateInfoButton.textContent = 'Show Private Info';
      } else {
        studentPhoneElement.textContent = `Phone: ${phoneValue}`;
        studentEmailElement.textContent = `Email: ${emailValue}`;
        privateInfoButton.textContent = 'Hide Private Info';
      }
    })

    studentItem.append(studentNameElement, studentInfoList, privateInfoButton);
    studentsList.prepend(studentItem);
  })
}

init();