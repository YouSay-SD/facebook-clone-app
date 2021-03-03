import React, { FC, useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { Container, Title, Avatar, Box, Button } from '../..';
import { ResultsContainer, Result, TitleContainer } from './styles';
import { searchUsers } from '../../../helpers/searchUsers';

const SearchContent: FC = () => {
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  const [usersFound, setUsersFound] = useState([]);

  const handleSearch = async () => {
    if (q) {
      const users = await searchUsers(q[0]);
      setUsersFound(users);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [q]);

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <Container>
        <ResultsContainer>
          <Box>
            <TitleContainer>
              <Title size={20} fontWeight={700}>
                People
              </Title>
            </TitleContainer>
            {usersFound.length > 0 ? (
              <>
                {usersFound.map(({ uid, userName, avatar }) => (
                  <Link to={`../profile/${userName}`} key={uid} target='_self'>
                    <Result>
                      <Avatar url={avatar} size={60} />
                      <Title fontWeight={500}>{userName}</Title>
                    </Result>
                  </Link>
                ))}
              </>
            ) : (
              'Results not found'
            )}
            <Button fontSize={15} fontWeight={500}>
              See More
            </Button>
          </Box>
        </ResultsContainer>
      </Container>
    </>
  );
};

export default SearchContent;
