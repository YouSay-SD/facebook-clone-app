import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Title } from '../..';
import { useForm } from '../../../hooks/useForm';
import { searchUser } from '../../../helpers/searchUsers';
import { CurrentUserProps } from '../../../reducers/userReducer/userReducer';
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

  const [usersFound, setUsersFound] = useState([]);

  const { search } = formValues;

  const handleFormSearch = async () => {
    const users = await searchUser(search);
    setUsersFound(users);
  };

  useEffect(() => {
    handleFormSearch();
  }, [search]);

  return (
    <SearchContainer>
      <Icon src={`${process.env.REACT_APP_URL}/img/icons/search.svg`} />
      <form onSubmit={handleFormSearch}>
        <Search
          type='text'
          name='search'
          placeholder='Search Facebook'
          autoComplete='off'
          onChange={handleInputChange}
        />
      </form>
      {usersFound.length > 0 && (
        <ResultsContainer>
          {usersFound.map(
            ({ avatar, uid, userName = '' }: CurrentUserProps) => (
              <Link to={`/${userName}`} key={uid}>
                <Result id={uid}>
                  <Avatar url={avatar} />
                  <Title size={15}>{userName}</Title>
                </Result>
              </Link>
            )
          )}
        </ResultsContainer>
      )}
    </SearchContainer>
  );
};

export default Searcher;
