'use client'
import Styles from './AuthForm.module.css';
import { useEffect } from "react";
import { authorize } from '@/app/api/api-utils';
import { endpoints } from '@/app/api/config';
import { useState } from 'react';
import { isResponseOk, getMe } from '@/app/api/api-utils';

import { useContext } from "react";
import { AuthContext } from "@/app/context/app-context";

import { useStore } from "@/app/store/app-store";

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const authContext = useStore();
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    const newAuthData = authData;
    newAuthData[e.target.name] = e.target.value;
    setAuthData(newAuthData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Вызываем функцию authorize с данными из формы */
    const userData = await authorize(endpoints.auth, authData);

    if (isResponseOk(userData)) {
      authContext.login({ ...userData, id: userData._id }, userData.jwt);

      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };

  useEffect(() => {
    let timer;
    if (authContext.user) {
      timer = setTimeout(() => {
        /* В props close лежит функция закрытия попапа */
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [authContext.user]);

  return (
    <form className={Styles['form']}>
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            name="email"
            type="email"
            placeholder="hello@world.com"
          />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input onInput={handleInput} className={Styles['form__field-input']} name="password" type="password" placeholder='***********' />
        </label>
      </div>
      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )}
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit" onClick={handleSubmit}>Войти</button>
      </div>
    </form>
  )
};
