import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Checkbox from '../../../Components/Survey/Checkbox';
import Checkbox2 from '../../../Components/Survey/Checkbox2';

const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 1280px;
  display: flex;
`;

const SurveyContainer = styled.div`
  background-color: #f3f0e2;
  opacity: 95%;
  width: 996px;
  height: 1209px;
  position: relative;
  top: 36px;
  left: 450px;
  border-radius: 20px;
`;

const Ribbon_container = styled.div`
  display: flex;
  width: 350px;
  height: 90px;
  margin: 60px 0 0 0;
`;

const Ribbon = styled.div`
  background-color: #5f4541;
  width: 300px;
  height: 90px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  p {
    color: white;
    text-align: center;
    font-size: 48px;
    position: relative;
    top: 10%;
  }
`;

const Ribbon_top = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 24px solid transparent;
  border-top: 22.5px solid #5f4541;
  border-left: 25px solid #5f4541;
  border-right: 25px solid transparent;
`;

const Ribbon_bottom = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 23px solid #5f4541;
  border-top: 22.5px solid transparent;
  border-left: 25px solid #5f4541;
  border-right: 25px solid transparent;
`;

const Notice = styled.div`
  margin-top: 63px;

  h3 {
    font-size: 25px;
    text-align: center;
  }
`;

const SurveyPage = () => {
  return (
    <div>
      <Container>
        <SurveyContainer>
          <Ribbon_container>
            <Ribbon>
              <p>스마트폰</p>
            </Ribbon>
            <div>
              <Ribbon_top />
              <Ribbon_bottom />
            </div>
          </Ribbon_container>
          <Notice>
            <h3>
              고객님께 "딱" 맞는 교육을 찾아드릴게요!
              <br />몇 가지만 답해주세요.
            </h3>
          </Notice>
          <Checkbox />
          <br />
          <Checkbox2 />
          <button className="">다음</button>
        </SurveyContainer>
      </Container>
    </div>
  );
};

export default SurveyPage;
