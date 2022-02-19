
const validation = new JustValidate('.form');



validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать больше 3 букв'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно содержать меньше 30 букв'

    },
    {
      rule: 'required',
      errorMessage: 'Укажите имя',
    },
  ])
  validation.addField('#tel', [
    {
      errorMessage: 'Введите корректный телефон',
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      
    },
  },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Укажите Email',
    },
    {
      rule: 'email',
      errorMessage: 'Email некорректный',
    },
  ]);



// var selector = document.querySelector('#tel');
//   validation.addField('#tel', [
//     {
//       function (name, value) => {
//       const phone = selector.inputmask.unmaskedvalue()
//       return Number(phone) && phone.length  === 10
//     }
//   },
//   ]);
    
