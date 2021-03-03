import React, { FC, useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Container, Title, Avatar } from '../..';
import { ResultsContainer, Result } from './styles';
import { searchUsers } from '../../../helpers/searchUsers';

const SearchContent: FC = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  console.log(typeof q);

  const [usersFound, setUsersFound] = useState([]);

  const handleSearch = async () => {
    const users = await searchUsers(q);
    setUsersFound(users);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <Container>
        <ResultsContainer>
          <Title>People</Title>
          {usersFound.map(({ uid, userName, avatar }) => (
            <Link to={`../profile/${userName}`} target='_self'>
              <Result key={uid}>
                <Avatar url={avatar} />
                <Title>{userName}</Title>
              </Result>
            </Link>
          ))}
        </ResultsContainer>
      </Container>
    </>
  );
};

export default SearchContent;
