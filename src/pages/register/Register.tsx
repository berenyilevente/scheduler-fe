import { Button, Card, EmailInput, PasswordInput, Icon } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { registerAction } from '@/redux/state/auth-state/authActions';
import { InputType } from '@/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [emailInput, setEmailInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);
  const [confirmPasswordInput, setConfirmPasswordInput] =
    useState<string | null>(null);

  function onRegister(): void {
    if (
      emailInput === null ||
      passwordInput === null ||
      confirmPasswordInput === null
    ) {
      return;
    }
    dispatch(
      registerAction({
        email: emailInput,
        password: passwordInput,
        confirmPassword: confirmPasswordInput,
      })
    );
  }

  return (
    <div className="grid w-[420px] m-auto mt-96">
      <Card>
        <div className="grid gap-y-3">
          <div className="flex justify-center m-4">
            <Icon iconType="siteLogo" />
          </div>
          <EmailInput
            componentType={InputType.Email}
            onChange={(value) => setEmailInput(value)}
            value=""
            label="Email"
            required
          />
          <PasswordInput
            onChange={(value) => setPasswordInput(value)}
            value=""
            label="Password"
            required
          />
          <PasswordInput
            onChange={(value) => setConfirmPasswordInput(value)}
            value=""
            label="Confirm password"
            required
          />
          <div className="flex flex-col gap-y-4">
            <Button variant="filled" onClick={onRegister}>
              Sign up
            </Button>
            <Button variant="outline" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
