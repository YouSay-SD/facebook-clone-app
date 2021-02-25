import React, { FC } from 'react';
import { Avatar, Title } from '../..';
import { useForm } from '../../../hooks/useForm';
import {
  SearchContainer,
  Search,
  Icon,
  ResultsContainer,
  Result,
} from './styles';

const Searcher: FC = () => {
  const { formValues, handleInputChange } = useForm({
    search: '',
  });

  const handleFormSearch = () => {
    console.log(formValues);
  };

  return (
    <SearchContainer>
      <Icon src={`${process.env.REACT_APP_URL}/img/icons/search.svg`} />
      <form onChange={handleFormSearch}>
        <Search
          type='text'
          name='search'
          placeholder='Search Facebook'
          autoComplete='off'
          onChange={handleInputChange}
        />
      </form>
      <ResultsContainer>
        <Result>
          <Avatar url='https://somoskudasai.com/wp-content/uploads/2021/01/portada_genshin-impact-29.jpg' />
          <Title size={15}>YouSay</Title>
        </Result>
        <Result>
          <Avatar url='https://somoskudasai.com/wp-content/uploads/2021/01/portada_genshin-impact-29.jpg' />
          <Title size={15}>YouSay</Title>
        </Result>
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Searcher;
