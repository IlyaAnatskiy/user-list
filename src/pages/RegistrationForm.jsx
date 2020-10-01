import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { fetchAddUser } from '../redux/action/users';

function RegistrationForm() {
  let cartNumber;

  const dispatch = useDispatch();
  const [phrase, setPhrase] = React.useState('');

  React.useEffect(() => {
    axios.get('https://meowfacts.herokuapp.com/').then(({ data }) => setPhrase(...data.data));
  }, []);

  const [form, setFrom] = React.useState({
    firstName: '',
    lastName: '',
    gender: '',
    loyalty: 'notAvailable',
    numberOfCart: '',
  });

  const changeHandler = (event) => {
    setFrom({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (form) {
      const newUser = {
        ...form,
        date: new Date().toLocaleDateString(),
      };
      dispatch(fetchAddUser(newUser));
    }
  };

  if (form.loyalty === 'cart') {
    cartNumber = (
      <div>
        <label htmlFor="numberOfCart">Номер Карты</label>
        <input
          type="text"
          id="numberOfCart"
          name="numberOfCart"
          placeholder="Номер Карты"
          onChange={changeHandler}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">Имя</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Имя"
          onChange={changeHandler}
        />

        <label htmlFor="lname">Фамилия</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Фамилия"
          onChange={changeHandler}
        />

        <label htmlFor="gender">Пол</label>
        <input type="text" id="gender" name="gender" placeholder="Пол" onChange={changeHandler} />

        <label htmlFor="loyalty">Программа лояльности</label>
        <select value={form.loyalty} name="loyalty" onChange={changeHandler}>
          <option name="Недоступна" value="notAvailable">
            Недоступна
          </option>
          <option name="Пластиковая карта" value="cart">
            Пластиковая карта
          </option>
          <option name="Моб.приложение" value="mobile">
            Моб.приложение
          </option>
        </select>
        {cartNumber}
        <input type="submit" value="Submit" />
      </form>
      <span>{phrase}</span>
    </div>
  );
}

export default RegistrationForm;
