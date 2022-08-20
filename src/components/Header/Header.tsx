import { Header2, HeaderContainer, UserName, UserPicture, Location } from "./styles";

export interface HeaderProps {
    usernamePicture: string;
    username: string;
    location?: string;
};

const Headerf = (props: HeaderProps) => {
    const { usernamePicture, username, location } = props;

    return (
        <HeaderContainer>
            <UserPicture src={usernamePicture} onClick={() => { document.location.href = "erikdunlop" }} />
            <Header2>
                <UserName onClick={() => { document.location.href = "erikdunlop" }}>
                    {username}
                </UserName>
                <Location>
                    {location ? <>{location}</> : <></>}
                </Location>
            </Header2>
        </HeaderContainer>
    );
};

export default Headerf;