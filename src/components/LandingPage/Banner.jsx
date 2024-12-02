import { BannerContainer, BannerContent, BannerTitle, TextPrincipal, ImageBanner } from "../../styles/LandingPage/Banner";
import banner from '../../assets/spoticry.png'

const Banner = () => {
    return (
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Você chegou no Spoticry!</BannerTitle>
          <TextPrincipal>
            <div>
              <h1>{`SPOTICRY`}</h1>
              <p>
                é o seu novo destino para explorar, curtir e criar experiências
                musicais. Com uma interface intuitiva e recursos inovadores, você
                pode acessar suas músicas favoritas, criar playlists personalizadas
                e descobrir novos sons que vão transformar o seu dia. Prepare-se
                para se conectar ao poder da música de uma forma única e
                personalizada. Com o Spoticry, cada momento é uma trilha sonora
                feita especialmente para você!
              </p>
            </div>
          </TextPrincipal>
        </BannerContent>
        <ImageBanner>
          <img src={banner} alt="Mulher com um fone de ouvido escutando música" />
        </ImageBanner>
      </BannerContainer>
    );
};

export default Banner;