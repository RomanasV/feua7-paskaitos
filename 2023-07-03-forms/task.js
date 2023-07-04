function itKnowledgeHandler() {
  const itKnowledgeInput = document.querySelector('#it-knowledge');
  const itKnowledgeOutput = document.querySelector('#it-knowledge-output');

  itKnowledgeOutput.textContent = itKnowledgeInput.value;

  itKnowledgeInput.addEventListener('input', () => {
    itKnowledgeOutput.textContent = itKnowledgeInput.value;
  })
}

function init() {
  itKnowledgeHandler();

  const studentForm = document.querySelector('#student-form');

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
    studentPhoneElement.textContent = `Phone: ${phoneValue}`;

    const studentEmailElement = document.createElement('li');
    studentEmailElement.textContent = `Email: ${emailValue}`;

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

    studentItem.append(studentNameElement, studentInfoList);
    studentsList.prepend(studentItem);
  })
}

init();