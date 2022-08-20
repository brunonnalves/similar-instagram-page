import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselImg from "../../components/CarouselImg/CarouselImg";
import CommentsList from "../../components/CommentsList/CommentsList";
import IconsContainer from "../../components/IconsContainer/IconsContainer";
import api from "../../services/api";
import UserImage from "../../assets/profile-picture.svg"
import { Container, ContentContainer, Header, HeaderContainer, Location, UserName, UserPicture } from "./styles";


const Home = () => {

    const navigate = useNavigate()
    const [photosIds, setPhotosIds] = useState([]);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        const { data } = await api.get(`/list?limit=5`);
        if (data && data.length > 0) {
            setPhotosIds(data.map((el: any) => el.id))
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <UserPicture src={UserImage} />
                <Header>
                    <UserName onClick={() => { navigate('erikdunlop') }}>Erik Dunlop</UserName>
                    <Location>San Franciso, California</Location>
                </Header>
            </HeaderContainer>
            <CarouselImg ids={photosIds} />
            <ContentContainer>
                <IconsContainer />
                <CommentsList />
            </ContentContainer>
        </Container>
    );
};

export default Home;