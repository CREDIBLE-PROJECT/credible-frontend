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
  let isClicked = false;

  const viewItem1 = () => {
    setViewItem(<Item1 />);
    isClicked = true;
  };

  const veiwItem2 = () => {
    setViewItem(<Item2 />);
  };

  const veiwItem3 = () => {
    setViewItem(<Item3 />);
  };

  const veiwItem4 = () => {
    setViewItem(<Item4 />);
  };

  const veiwItem5 = () => {
    setViewItem(<Item5 />);
  };

  const veiwItem6 = () => {
    setViewItem(<Item6 />);
  };

  return (
    <StyledRoot>
      <ReportMain>
        <pre>김사보님의 AI 신용점수는 </pre>
        <pre className="blue">753점</pre>
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
            type="button"
            className="report1"
            style={{ fontWeight: isClicked ? 'bold' : 'regular' }}
            onClick={viewItem1}
          >
            대출 중인 금액
          </button>
          <p className="percent1">40%</p>
        </ReportText>
        <ReportText>
          <button type="button" className="report2" onClick={veiwItem2}>
            대출 신청인 수입
          </button>
          <p className="percent2">52%</p>
        </ReportText>
        <ReportText>
          <button type="button" className="report3" onClick={veiwItem3}>
            금융 서비스 대출 이용횟수
          </button>
          <p className="percent3">73%</p>
        </ReportText>
        <ReportText>
          <button type="button" className="report4" onClick={veiwItem4}>
            상환기간
          </button>
          <p className="percent4">76%</p>
        </ReportText>
        <ReportText>
          <button type="button" className="report5" onClick={veiwItem5}>
            주거지 소유 여부
          </button>
          <p className="percent5">93%</p>
        </ReportText>
        <ReportText>
          <button type="button" className="report6" onClick={veiwItem6}>
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
