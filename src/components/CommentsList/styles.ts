import styled from "styled-components";

export const CommentsContainer = styled.div`
display: flex;
flex-direction: column;
overflow: auto;
height: 55%;
margin: 26px 0px 26px 0px;
padding-right: 2px;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #3D8AFF;
        border-radius: 4px;
        height: 4px;
    }
`;

export const CommentContainer = styled.div`
margin-bottom: 22px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #000000;
`;

export const CommentBar = styled.div`
display: flex;
padding: 10px;
height: 35px;
background: #F1F1F1;
border-radius: 5px;
`;

export const CommentInput = styled.input`
all: unset;
width: 100%;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #000000;
`;

export const CommentButton = styled.button`
all: unset;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
text-align: right;
color: #3D8AFF;
`;