import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { RangeInput, SwitchInput } from 'components/Inputs';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { StyledForm, Inputs, Fieldset, Legend, VolumeIcons } from './StyledSettingsForm';

import { useAppDispatch } from 'store/hooks';
import { setSettings } from 'store/quiz/actions';
import { Languages, Themes } from 'store/quiz/types';

import volumeDown from 'assets/svg/volume-mute.svg';
import volumeUp from 'assets/svg/volume-up.svg';

type SettingsData = {
  volume: string;
  hasTimer: boolean;
  answerTime: string;
  themeIsDark: boolean;
  language: Languages;
};

export function SettingsForm() {
  const prefillSettings = {
    themeIsDark: true,
    volume: '0',
  };

  const { register, handleSubmit } = useForm<SettingsData>({
    defaultValues: prefillSettings,
  });
  //FIXME: prefill

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onSubmit = (data: SettingsData) => {
    const settings = {
      theme: data.themeIsDark ? Themes.Dark : Themes.Light,
      volume: +data.volume,
      hasTimer: data.hasTimer,
      language: data.language ? Languages.RU : Languages.EN,
    };
    dispatch(setSettings(settings));
  };

  return (
    <StyledForm onInput={handleSubmit(onSubmit)}>
      <Inputs>
        <Fieldset>
          <Legend>{t('Theme')}</Legend>
          <label>
            {t(Themes.Light)}
            <SwitchInput {...register('themeIsDark')} />
            {t(Themes.Dark)}
          </label>
        </Fieldset>

        <Fieldset>
          <Legend>{t('Language')}</Legend>
          <label>
            {t(Languages.EN)}
            <SwitchInput {...register('language')} />
            {t(Languages.RU)}
          </label>
        </Fieldset>

        <Fieldset>
          <Legend>{t('Volume')}</Legend>
          <RangeInput {...register('volume')} size="small" defaultValue={70} max={100} min={0} />
          <VolumeIcons>
            <ThemedSVG src={volumeDown} width="2rem" height="2rem" />
            <ThemedSVG src={volumeUp} width="2rem" height="2rem" />
          </VolumeIcons>
        </Fieldset>

        <Fieldset>
          <Legend>{t('Time game')}</Legend>
          <label>
            {t('On')}
            <SwitchInput {...register('hasTimer')} />
          </label>
        </Fieldset>
      </Inputs>
    </StyledForm>
  );
}
