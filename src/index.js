import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n'; // load i18n
import App from './apps/App';

import Discovery_Topic from './pages/topic/Discovery_Topic';
import Joking_Topic from './pages/topic/Joking_Topic';

import HistoryOfAmerica_Part_01 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_01';
import HistoryOfAmerica_Part_02 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_02';
import HistoryOfAmerica_Part_03 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_03';
import HistoryOfAmerica_Part_04 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_04';
import HistoryOfAmerica_Part_05 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_05';
import HistoryOfAmerica_Part_06 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_06';
import HistoryOfAmerica_Part_07 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_07';
import HistoryOfAmerica_Part_08 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_08';
import HistoryOfAmerica_Part_09 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_09';
import HistoryOfAmerica_Part_10 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_10';
import HistoryOfAmerica_Part_11 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_11';
import HistoryOfAmerica_Part_12 from './pages/discovery/USAHistorical/HistoryOfAmerica_Part_12';

import Joking_Part_01 from './pages/joking/Joking_Part_01';

import TicTacToe from './game/TicTacToe';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { articleLinks } from './generic/articleLinks';
import { topicLinks } from './generic/topicLinks';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  	<ScrollToTop />
    <Routes>
      
	  <Route path="/" element={<App />} />
	  
	  <Route path={topicLinks.discovery('discovery').to_pattern} element={<Discovery_Topic />} />
	  <Route path={topicLinks.joking('joking').to_pattern} element={<Joking_Topic />} />
	  
	  <Route path={articleLinks.discovery_history_of_america_part_01.to} element={<HistoryOfAmerica_Part_01 />} />
	  <Route path={articleLinks.discovery_history_of_america_part_02.to} element={<HistoryOfAmerica_Part_02 />} />
      <Route path={articleLinks.discovery_history_of_america_part_03.to} element={<HistoryOfAmerica_Part_03 />} />
      <Route path={articleLinks.discovery_history_of_america_part_04.to} element={<HistoryOfAmerica_Part_04 />} />
      <Route path={articleLinks.discovery_history_of_america_part_05.to} element={<HistoryOfAmerica_Part_05 />} />
      <Route path={articleLinks.discovery_history_of_america_part_06.to} element={<HistoryOfAmerica_Part_06 />} />
      <Route path={articleLinks.discovery_history_of_america_part_07.to} element={<HistoryOfAmerica_Part_07 />} />
      <Route path={articleLinks.discovery_history_of_america_part_08.to} element={<HistoryOfAmerica_Part_08 />} />
      <Route path={articleLinks.discovery_history_of_america_part_09.to} element={<HistoryOfAmerica_Part_09 />} />
      <Route path={articleLinks.discovery_history_of_america_part_10.to} element={<HistoryOfAmerica_Part_10 />} />
      <Route path={articleLinks.discovery_history_of_america_part_11.to} element={<HistoryOfAmerica_Part_11 />} />
      <Route path={articleLinks.discovery_history_of_america_part_12.to} element={<HistoryOfAmerica_Part_12 />} />
	  
      <Route path='{articleLinks.joking_part_01.to}' element={<Joking_Part_01 />} />
	  
      <Route path='/game/tic-tac-toe' element={<TicTacToe />} />
	  
	  
	  	  
    </Routes>
  </BrowserRouter>
);
