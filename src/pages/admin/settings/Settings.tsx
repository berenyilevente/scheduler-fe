import {
  DropdownInput,
  TextInput,
  SwitchInput,
  Button,
  InputComponentHandler,
  LoadingSpinner,
} from '@/components';
import { dropdownInputOptions, InputArgs } from '@/utils';
import { useEffect, useState } from 'react';
import { fetchInputs, createInput } from '@/api';

export interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  const [dropdownValue, setDropdownValue] = useState<string>();
  const [inputValue, setInputValue] = useState<string>();
  const [switchValue, setSwitchValue] = useState<boolean>();
  const [inputData, setInputData] = useState<InputArgs[] | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const onDropdownChange = (selectedOption: string): void => {
    setDropdownValue(selectedOption);
  };

  const onInputChange = (inputValue: string): void => {
    setInputValue(inputValue);
  };

  const onSwitchChange = (switchValue: string): void => {
    setSwitchValue(switchValue === 'true' && true);
  };

  const onSubmit = async (): Promise<void> => {
    if (
      dropdownValue === undefined ||
      inputValue === undefined ||
      switchValue === undefined
    ) {
      return;
    }

    setRefresh(!refresh);
    await createInput({
      inputType: dropdownValue,
      label: inputValue,
      required: switchValue,
    });
  };

  useEffect(() => {
    const getInputs = async () => {
      const res = await fetchInputs();
      setInputData(res.data);
    };
    getInputs();
  }, [refresh]);

  const RenderInputs = (): JSX.Element => {
    if (inputData === null || inputData?.length === 0) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        {inputData.map((data, index) => (
          <div key={index}>
            <InputComponentHandler
              component={data.inputType}
              onChange={(value) => console.log(value)}
              label={data.label}
              required={data.required}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="grid gap-y-4 ">
      <div className="text-3xl font-bold underline">Welcome to scheduler</div>
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-2xl font-bold">Create input fields</h2>
        <DropdownInput
          options={dropdownInputOptions}
          onChange={(selectedOption) => onDropdownChange(selectedOption)}
          value={dropdownValue}
          label="Select input type"
        />
        <TextInput
          onChange={(inputValue) => onInputChange(inputValue)}
          label="Specify input label"
        />
        <SwitchInput
          onChange={(switchValue) => onSwitchChange(switchValue)}
          label="Required?"
        />
        <Button variant={'filled'} size="medium" onClick={onSubmit}>
          Create Field
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-2xl font-bold">My input fields</h2>

        <RenderInputs />
      </div>
    </div>
  );
};
