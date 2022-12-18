/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Receipt, Pig } from 'assets';
import { Item1, Item2, Item3, Item4, Item5, Item6 } from 'components';
import moment from 'moment';
import {
  StyledRoot,
  FirstHorizon,
  ReportMain,
  ReportImg,
  ReportContent,
  ReportTitle,
  ReportItem,
  ReportText,
  SecondHorizon,
  ThirdHorizon,
} from './style';

function Result() {
  const [viewItem, setViewItem] = useState();
  const [weight1, setWeight1] = useState(false);
  const [weight2, setWeight2] = useState(false);
  const [weight3, setWeight3] = useState(false);
  const [weight4, setWeight4] = useState(false);
  const [weight5, setWeight5] = useState(false);
  const [weight6, setWeight6] = useState(false);

  const viewItem1 = () => {
    setWeight2(false);
    setWeight3(false);
    setWeight4(false);
    setWeight5(false);
    setWeight6(false);
    setViewItem(<Item1 />);
    setWeight1(true);
  };

  const veiwItem2 = () => {
    setWeight1(false);
    setWeight3(false);
    setWeight4(false);
    setWeight5(false);
    setWeight6(false);
    setViewItem(<Item2 />);
    setWeight2(true);
  };

  const veiwItem3 = () => {
    setWeight1(false);
    setWeight2(false);
    setWeight4(false);
    setWeight5(false);
    setWeight6(false);
    setViewItem(<Item3 />);
    setWeight3(true);
  };

  const veiwItem4 = () => {
    setWeight1(false);
    setWeight2(false);
    setWeight3(false);
    setWeight5(false);
    setWeight6(false);
    setViewItem(<Item4 />);
    setWeight4(true);
  };

  const veiwItem5 = () => {
    setWeight1(false);
    setWeight2(false);
    setWeight3(false);
    setWeight4(false);
    setWeight6(false);
    setViewItem(<Item5 />);
    setWeight5(true);
  };

  const veiwItem6 = () => {
    setWeight1(false);
    setWeight2(false);
    setWeight3(false);
    setWeight4(false);
    setWeight5(false);
    setViewItem(<Item6 />);
    setWeight6(true);
  };

  return (
    <StyledRoot>
      <ReportMain>
        <pre>김사보님의 AI 신용점수는 </pre>
        <pre className="blue">866점</pre>
        <pre>입니다.</pre>
      </ReportMain>
      <ReportImg src={Receipt} alt="영수증 이미지" />
      <ReportContent>
        <p className="date">{moment().format('YYYY.MM.DD')}</p>
        <img src={Pig} alt="돼지저금통 이미지" className="pig" />
        <ReportTitle>
          <pre className="sub1">내 신용점수 </pre>
          <p className="sub2">XAI 레포트</p>
        </ReportTitle>
        <ReportItem>
          <p className="item">항목</p>
          <p className="percent">상위%</p>
        </ReportItem>
        <FirstHorizon />
        <ReportText>
          <button
            style={{ fontWeight: weight1 ? 'bold' : 'normal' }}
            type="button"
            className="report1"
            onClick={viewItem1}
          >
            대출 중인 금액
          </button>
          <p className="percent1">40%</p>
        </ReportText>
        <ReportText>
          <button
            style={{ fontWeight: weight2 ? 'bold' : 'normal' }}
            type="button"
            className="report2"
            onClick={veiwItem2}
          >
            대출 신청인 수입
          </button>
          <p className="percent2">52%</p>
        </ReportText>
        <ReportText>
          <button
            style={{ fontWeight: weight3 ? 'bold' : 'normal' }}
            type="button"
            className="report3"
            onClick={veiwItem3}
          >
            금융 서비스 대출 이용횟수
          </button>
          <p className="percent3">73%</p>
        </ReportText>
        <ReportText>
          <button
            style={{ fontWeight: weight4 ? 'bold' : 'normal' }}
            type="button"
            className="report4"
            onClick={veiwItem4}
          >
            상환기간
          </button>
          <p className="percent4">76%</p>
        </ReportText>
        <ReportText>
          <button
            style={{ fontWeight: weight5 ? 'bold' : 'normal' }}
            type="button"
            className="report5"
            onClick={veiwItem5}
          >
            주거지 소유 여부
          </button>
          <p className="percent5">93%</p>
        </ReportText>
        <ReportText>
          <button
            style={{ fontWeight: weight6 ? 'bold' : 'normal' }}
            type="button"
            className="report6"
            onClick={veiwItem6}
          >
            근무 기간
          </button>
          <p className="percent6">100%</p>
        </ReportText>
        <SecondHorizon />
        <ReportItem>
          <p className="total">대출 심사 예측</p>
          <p className="totalPercent">불가능</p>
        </ReportItem>
        <ThirdHorizon />
      </ReportContent>
      {viewItem}
    </StyledRoot>
  );
}

export default Result;
