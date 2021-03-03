import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Title } from '../..';
import { useForm } from '../../../hooks/useForm';
import { searchUsers } from '../../../helpers/searchUsers';
import { CurrentUserProps } from '../../../reducers/userReducer/userReducer';
import {
  SearchContainer,
  Search,
  Icon,
  ResultsContainer,
  Result,
} from './styles';

const Searcher: FC = () => {
  const history = useHistory();
  const { formValues, handleInputChange } = useForm({
    search: '',
  });
  const [usersFound, setUsersFound] = useState([]);
  const [displayInput, setDisplayInput] = useState<boolean>(false);
  const { search } = formValues;

  const handleSearch = async () => {
    const users = await searchUsers(search);
    setUsersFound(users);
    setDisplayInput(true);
  };

  const goSearchPage = async (e: any) => {
    e.preventDefault();
    history.push(`/search/?q=${search}`);
  };

  const handleHideInput = () => {
    setTimeout(() => {
      setDisplayInput(false);
    }, 500);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <SearchContainer>
      <Icon src={`${process.env.REACT_APP_URL}/img/icons/search.svg`} />
      <form onSubmit={goSearchPage}>
        <Search
          type='text'
          name='search'
          placeholder='Search Facebook'
          autoComplete='off'
          onChange={handleInputChange}
          onClick={handleSearch}
          onBlur={handleHideInput}
        />
      </form>
      {usersFound.length > 0 && (
        <ResultsContainer displayResults={displayInput}>
          {usersFound.map(({ avatar, uid, userName }: CurrentUserProps) => (
            <Link to={`../profile/${userName}`} key={uid}>
              <Result id={uid}>
                <Avatar url={avatar} />
                <Title size={15}>{userName}</Title>
              </Result>
            </Link>
          ))}
        </ResultsContainer>
      )}
    </SearchContainer>
  );
};

export default Searcher;
