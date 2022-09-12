/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Join, Main, Report, Details, Compare } from 'pages';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        {/* Private Route : 로그인 후 접근 가능한 페이지 */}
        <Route path="/report" element={<Report />} />
        <Route path="/details" element={<Details />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
