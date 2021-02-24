import React, { FC } from 'react';
import { Avatar, Title } from '../..';
import {
  SearchContainer,
  Search,
  Icon,
  ResultsContainer,
  Result,
} from './styles';

const Searcher: FC = () => {
  return (
    <SearchContainer>
      <Icon src={`${process.env.REACT_APP_URL}/img/icons/search.svg`} />
      <Search
        type='text'
        name='search'
        placeholder='Search Facebook'
        autoComplete='off'
      />
      <ResultsContainer>
        <Result>
          <Avatar url='https://somoskudasai.com/wp-content/uploads/2021/01/portada_genshin-impact-29.jpg' />
          <Title>YouSay</Title>
        </Result>
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Searcher;
