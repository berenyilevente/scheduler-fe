import { Button, Card, EmailInput, PasswordInput, Icon } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { loginAction } from '@/redux/state/auth-state/authActions';
import { InputComponent, PrivateRouteUrl, PublicRouteUrl } from '@/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [emailInput, setEmailInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);

  function onLogin(): void {
    if (emailInput === null || passwordInput === null) {
      return;
    }

    dispatch(loginAction({ email: emailInput, password: passwordInput }));
    navigate(PrivateRouteUrl.Dashboard);
  }

  return (
    <div className="grid w-[420px] m-auto mt-96">
      <Card>
        <div className="grid gap-y-1">
          <div className="flex justify-center m-4">
            <Icon iconType="siteLogo" />
          </div>
          <EmailInput
            componentType={InputComponent.Email}
            onChange={(value) => setEmailInput(value)}
            value={emailInput}
            label="Email"
          />
          <PasswordInput
            onChange={(value) => setPasswordInput(value)}
            value={passwordInput}
            label="Password"
          />
          <div className="flex flex-col gap-y-3 my-4">
            <Button variant="filled" onClick={onLogin}>
              Login
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(PublicRouteUrl.Register)}
            >
              Sign up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
