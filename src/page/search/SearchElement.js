import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow:hidden;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 15px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
    font-size: 28px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Nav = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  } ;
`;
export const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const SearchContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  height: auto;

  @media (max-width: 767px){
    max-width: 540px;
  }
`;


export const SearchCard = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;


`;
export const SearchInput = styled.input`
  outline: none;
  display: block;
  width: 95%;
  padding: .375rem .75rem;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`;
export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 3rem;
`;
export const TitleSub = styled.p`
  color: #868e96;
  margin-top: 0;
  margin-bottom: 1rem;
`;
export const Profile = styled.div`

`;
export const ProfileCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  flex: 1 1 auto;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 767px){
    padding: 1.25rem;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

`;
export const UserAvatar = styled.div`
  flex: 0 0 auto;
  width: 25%;

  @media screen and (max-width: 767px){
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }


`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: .5rem;

`;
export const UserBtn = styled.button`
  width: 100%;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,
  box-shadow .15s ease-in-out;
  color: #fff;
  background-color: #0D74E7;
  border-color: #0D74E7;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 767px){
    display: block;
    width: 100%;
  }

`;
export const RowRight = styled.div`
  flex: 0 0 auto;
  width: 75%;
  position: relative;

  @media screen and (max-width: 767px){
    width: 100%;
  }

`;
export const Badge = styled.span`
  display: inline-block;
  padding: 0.65em 0.65em;
  margin-left: 0.5rem;
  font-size: .85em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  background-color: #0D74E7;
  margin-bottom: 4px;

  @media screen and (max-width: 767px){
    padding-right: 15px;
    padding-left: 15px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  border-radius: .25rem;
  font-size: 1.1rem;
  list-style-type: disc;
  padding-inline-start: 8px;

`;
export const Item = styled.li`
  position: relative;
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);

`;


export const Loader = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`