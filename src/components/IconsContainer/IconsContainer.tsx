import { Container, IconContainer } from "./styles";
import LikeIcon from "../../assets/like"
import CommentIcon from "../../assets/comment"
import DirectIcon from "../../assets/direct"
import { useState } from "react";

const IconsContainer = () => {

    const [liked, setLiked] = useState(false)

    return (
        <Container>
            <IconContainer onClick={() => { setLiked(!liked) }}><LikeIcon fill={liked ? "#ED4956" : ""} /></IconContainer>
            <IconContainer><CommentIcon /></IconContainer>
            <IconContainer><DirectIcon /></IconContainer>
        </Container>
    );
};

export default IconsContainer;