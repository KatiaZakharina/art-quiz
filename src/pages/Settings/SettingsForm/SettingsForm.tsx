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

import { useAppDispatch } from 'store/hooks';
import { setSettings } from 'store/main/actions';
import { Themes } from 'store/main/types';

import volumeDown from 'assets/svg/volume-mute.svg';
import volumeUp from 'assets/svg/volume-up.svg';

type SettingsData = { volume: string; hasTimer: boolean; answerTime: string; themeIsDark: boolean };

export function SettingsForm() {
  const { register, handleSubmit, reset, watch } = useForm<SettingsData>();
  const hasTimer = watch('hasTimer');

  const dispatch = useAppDispatch();

  const onSubmit = (data: SettingsData) => {
    const settings = {
      theme: data.themeIsDark ? Themes.Dark : Themes.Light,
      volume: +data.volume,
      answerTime: +data.answerTime,
      hasTimer: data.hasTimer,
    };
    dispatch(setSettings(settings));
  };
  const onReset = () => {
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Inputs>
        <Fieldset>
          <Legend>Theme</Legend>
          <label>
            {Themes.Light}
            <SwitchInput {...register('themeIsDark')} />
            {Themes.Dark}
          </label>
        </Fieldset>

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
            <SwitchInput {...register('hasTimer')} />
          </label>
        </Fieldset>

        <Fieldset>
          <Legend>Time to answer</Legend>
          <NumberInput
            name="answerTime"
            register={register}
            min={5}
            max={20}
            value={5}
            step={5}
            disabled={!hasTimer}
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
