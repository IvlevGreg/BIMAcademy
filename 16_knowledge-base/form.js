
const validation = new JustValidate('#form');

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
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите телефон',
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
    
