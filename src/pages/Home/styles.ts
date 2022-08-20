import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;

max-width: 527px;
min-height: 739px;
margin: auto;

background: #FCFCFC;
border: 1px solid #DEDEDE;
box-shadow: -1px 7px 8px -5px rgba(0, 0, 0, 0.14);
border-radius: 5px;
`;

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
padding: 15px 0px 10px 25px;
display: flex;
height: 50px;
`;

export const UserPicture = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

export const Header = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-between;
height: 38px;
padding-left: 25px;
`;

export const UserName = styled.div`
text-decoration: none;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #000000;
    &:hover {
        cursor: pointer;
    }
`;

export const Location = styled.div`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #000000;
`;

export const ContentContainer = styled.div`
padding: 17px 25px 24px 25px;
height: 298px;
`;

