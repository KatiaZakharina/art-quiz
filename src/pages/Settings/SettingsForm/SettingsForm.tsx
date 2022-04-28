import { useForm } from 'react-hook-form';

import { Button } from 'components/Buttons/Buttons';
import { NumberInput, RangeInput, SwitchInput } from 'components/Inputs';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import {
  StyledForm,
  Inputs,
  Fieldset,
  Legend,
  VolumeIcons,
  ButtonsWrapper,
} from './StyledSettingsForm';

import volumeDown from 'assets/svg/volume-mute.svg';
import volumeUp from 'assets/svg/volume-up.svg';

type SettingsData = { volume: string; 'timer-mode': boolean; time: string };

export function SettingsForm() {
  const { register, handleSubmit, reset } = useForm<SettingsData>();

  const onSubmit = (data: SettingsData) => console.log(data);
  const onReset = () => {
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Inputs>
        <Fieldset>
          <Legend>Volume</Legend>
          <RangeInput {...register('volume')} size="small" defaultValue={70} max={100} min={0} />
          <VolumeIcons>
            <ThemedSVG src={volumeDown} width="2rem" height="2rem" />
            <ThemedSVG src={volumeUp} width="2rem" height="2rem" />
          </VolumeIcons>
        </Fieldset>

        <Fieldset>
          <Legend>Time game</Legend>
          <label>
            On
            <SwitchInput {...register('timer-mode')} />
          </label>
        </Fieldset>

        <Fieldset>
          <Legend>Time to answer</Legend>
          <NumberInput
            name="time"
            register={register}
            min={5}
            max={20}
            value={5}
            step={5}
            // disabled
          />
        </Fieldset>
      </Inputs>
      <ButtonsWrapper>
        <Button type="reset" variant="inverse_outline">
          Default
        </Button>
        <Button type="submit" variant="secondary">
          Save
        </Button>
      </ButtonsWrapper>
    </StyledForm>
  );
}
