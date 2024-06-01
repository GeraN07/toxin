import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LoginCard from '../../cards/login-card/login-card';
import RegistrationCard from '../../cards/registration-card/registration-card';
import BigFooter from '../../components/big-footer/big-footer';
import HeaderMain from '../../components/header-main/header-main';
import SmallFooter from '../../components/small-footer/small-footer';
import './login-page.css';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const param = searchParams.get('param');
    if (param === 'Reg') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [searchParams]);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="login-page">
       <Helmet>
        <title>login-page</title>
      </Helmet>
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
