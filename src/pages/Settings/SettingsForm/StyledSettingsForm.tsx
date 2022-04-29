import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
`;

export const Inputs = styled.div`
  @media (min-width: 768px) {
    width: 50vw;
    max-width: 500px;
    padding-left: 50px;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  border: 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Legend = styled.legend`
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const VolumeIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 5vh;
  margin-left: auto;
  width: 100%;
  max-width: 45rem;

  @media (min-width: 768px) {
    justify-content: end;
  }
`;
