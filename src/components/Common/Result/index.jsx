/* eslint-disable import/no-unresolved */
import React from 'react';
import { Receipt, Pig } from 'assets';
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
  return (
    <StyledRoot>
      <ReportMain>
        <pre>김이화님의 AI 신용점수는 </pre>
        <pre className="blue">743점</pre>
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
          <p className="report1">마지막 거래 이후 경과된 개월 수</p>
          <p className="percent1">35.4%</p>
        </ReportText>
        <ReportText>
          <p className="report2">연체되지 않은 거래의 비율</p>
          <p className="percent2">65.0%</p>
        </ReportText>
        <ReportText>
          <p className="report3">최근 12개월 중 가장 긴 연체기간</p>
          <p className="percent3">14.5%</p>
        </ReportText>
        <ReportText>
          <p className="report4">총 거래 횟수</p>
          <p className="percent4">52.3%</p>
        </ReportText>
        <ReportText>
          <p className="report5">신용 한도 대비 신용카드 잔액</p>
          <p className="percent5">44.9%</p>
        </ReportText>
        <ReportText>
          <p className="report6">최근 6개월 간 문의 건수</p>
          <p className="percent6">70.1%</p>
        </ReportText>
        <SecondHorizon />
        <ReportItem>
          <p className="total">Total</p>
          <p className="totalPercent">47.0%</p>
        </ReportItem>
        <ThirdHorizon />
      </ReportContent>
    </StyledRoot>
  );
}

export default Result;
