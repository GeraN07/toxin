'use client';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LoginCard from '../components/cards/login-card/login-card';
import RegistrationCard from '../components/cards/registration-card/registration-card';
import BigFooter from '../components/big-footer/big-footer';
import HeaderMain from '../components/header-main/header-main';
import SmallFooter from '../components/small-footer/small-footer';
import './login-page.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const searchParams = useSearchParams();

  const param = useMemo(() => searchParams.get('param'), [searchParams]);

  useEffect(() => {
    setIsLogin(param === 'Log');
  }, [param]);

  useEffect(() => {
    document.title = isLogin ? 'Вход в аккаунт' : 'Регистрация';
  }, [isLogin]);

  const toggleForm = () => setIsLogin((prev) => !prev);

  return (
    <div className="login-page">
      <HeaderMain />
      <section className="login-block">
        {isLogin ? (
          <LoginCard onToggleForm={toggleForm} />
        ) : (
          <RegistrationCard onToggleForm={toggleForm} />
        )}
      </section>
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default LoginPage;
