import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormContent,
  FormWrap,
  Nav,
  NavWrap,
  Icon,
  SearchContainer,
  SearchCard,
  SearchInput,
  Title,
  TitleSub,
  Profile,
  ProfileCard,
  Row,
  UserAvatar,
  Img,
  UserBtn,
  RowRight,
  List,
  Badge,
  Item,
} from './SearchElement';


const Home = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);
  const [isLoading, setIslaoding] = useState(false)


  const searchUsers = (username) => {
    return axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${username}`,
    }).then(res => {
      return res.data;
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    if (username !== "") {
      setIslaoding(true)
      searchUsers(username).then((res) => {
        setUser(res.items)
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setIslaoding(false)
      })
    } else {
      setUser([])
    }
  }, [username])


  const renderUser = (user) => {
    return (
      <>
        {!isLoading ? user.map((user) => {
          return <ProfileCard key={user.id}>
            <Row>
              <UserAvatar>
                <Img src={user.avatar_url} />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer"><UserBtn>View Profile</UserBtn></a>
              </UserAvatar>
              <RowRight>
                <Badge>Public Repositories: {user.repos_url}</Badge>
                <br />
                <br />
                <List>
                  <Item><strong>Organizations: </strong>{user.organizations_url ? user.organizations_url : " N/A"}</Item>
                  <Item><strong>Bio: </strong>{user.login ? user.login : " N/A"}</Item>
                  <Item><strong>Type: </strong>{user.type ? user.type : " N/A"}</Item>
                  <Item><strong>Website/Blog: </strong><a href={user.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{user.url}</a></Item>
                  <Item><strong>Score: </strong>{user.score ? user.score : " N/A"}</Item>
                </List>
              </RowRight>
            </Row>
          </ProfileCard>
        }) : <h2>...Loading</h2>}
      </>

    );
  }

  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Nav>
            <NavWrap>
              <Icon to="/" >Github Profile Finder 🔍</Icon>
            </NavWrap>
          </Nav>
          <SearchContainer>
            <SearchCard>
              <Title>Search GitHub Users</Title>
              <TitleSub>Enter a username to search for user profile and repositories...</TitleSub>
              <SearchInput type='text' placeholder="GitHub Username..." value={username} autoFocus required onChange={e => setUsername(e.target.value)} />
            </SearchCard>
            <Profile>
              {renderUser(user)}
            </Profile>
          </SearchContainer>
        </FormContent>
      </FormWrap>
    </Container>
  );
};
export default Home;