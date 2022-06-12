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
  RowCentre,
  ReposCard,
  Repos,
  RepoHeading
} from './SearchElement';

const Home = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState("");
/* 
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
      setRepos(response.data.data)
    }
    fetchUsers()
  }, {})

  const onChangeHandler = (user) => {
    setUser(user)
  }
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    searchRepos();
    searchUsers();
  }
  
    const searchRepos = () => {
      axios({
        method: "get",
        url: `https://api.github.com/users/${username}/repos?per_page=5`,
      }).then(res => {
        setRepos(res.data);
      });
    }
    const searchUsers = () => {
      axios({
        method: "get",
        url: `https://api.github.com/users/${username}`,
      }).then(res => {
        setUser(res.data);
      });
    }
  const renderRepo = (repo) => {
    return (
      <ReposCard key={repo.id}>
        <Row>
          <RowCentre>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{repo.name}</a>
          </RowCentre>
          <RowCentre>
            <Badge style={{ textDecoration: "none" }}>Stars: {repo.stargazers_count}</Badge>
            <Badge>Watchers: {repo.watchers_count}</Badge>
            <Badge>Forks: {repo.forks_count}</Badge>
            <Badge >Language: {repo.language}</Badge>
          </RowCentre>
        </Row>
      </ReposCard>
    );
  }
  const renderUser = (user) => {
    return (
      <ProfileCard>
        <Row>
          <UserAvatar>
            <Img src={user.avatar_url} />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer"><UserBtn>View Profile</UserBtn></a>
          </UserAvatar>
          <RowRight>
            <Badge>Public Repositories: {user.public_repos}</Badge>
            <Badge>Public Gists: {user.public_gists}</Badge>
            <Badge>Followers: {user.followers}</Badge>
            <Badge>Following: {user.following}</Badge>
            <br />
            <br />
            <List>
              <Item><strong>Company: </strong>{user.company ? user.company : " N/A"}</Item>
              <Item><strong>Bio: </strong>{user.bio ? user.bio : " N/A"}</Item>
              <Item><strong>Email: </strong>{user.email ? user.email : " N/A"}</Item>
              <Item><strong>Website/Blog: </strong><a href={user.blog} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{user.blog}</a></Item>
              <Item><strong>Location: </strong>{user.location ? user.location : " N/A"}</Item>
              <Item><strong>Member Since: </strong>{new Date(user.created_at).toDateString()}</Item>
            </List>
          </RowRight>
        </Row>
      </ProfileCard>
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
              <UserBtn onClick={handleSubmit}>Submit</UserBtn>
            </SearchCard>
            <Profile>
              {renderUser(user)}
              <Repos>
                <RepoHeading>Recently Added Public Repositories</RepoHeading>
                {repos.map(renderRepo)}
              </Repos>
            </Profile>
          </SearchContainer>
        </FormContent>
      </FormWrap>
    </Container>
  );
};
export default Home;