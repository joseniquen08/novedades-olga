import { Box, chakra, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

const images_slider = [
  'photo4987812273682753990.jpg',
  'photo4987812273682753991.jpg',
  'photo4987812273682753992.jpg',
  'photo4987812273682753993.jpg',
  'photo4987812273682753995.jpg',
  'photo4987812273682753997.jpg',
  'photo4987812273682754000.jpg',
  'photo4987812273682754002.jpg',
  'photo4987812273682754004.jpg'
];

export const Header = () => {

  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "layout", "src", "alt"].includes(prop),
  });

  return (
    <Box
      background='gray.100'
    >
      <Box
        position='relative'
        paddingY='1rem'
        marginX={{ base: '1rem', lg: 'auto' }}
        maxWidth='7xl'
        paddingX={{ sm: '1.5rem', lg: '2rem' }}
        height='38rem'
      >
        <HStack
          position='absolute'
          right={0}
          top={20}
          left={0}
          zIndex={10}
          alignItems='center'
          justifyContent='center'
          color='white'
        >
          <Heading
            as='h2'
            fontSize='5xl'
          >
            Novedades Olga
          </Heading>
        </HStack>
        <Swiper
          modules={[Autoplay, Pagination]}
          cssMode={true}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          className="mySiwper"
          style={{
            overflow: 'hidden',
            borderRadius: '0.5rem'
          }}
        >
          {
            images_slider.map((image, index) => (
              <SwiperSlide
                key={index}
              >
                <Box
                  width='full'
                  background='black'
                  height='36rem'
                >
                  <NextImage
                    src={`/images/${image}`}
                    alt={`Imagen ${index}`}
                    objectFit='cover'
                    objectPosition='center'
                    opacity={0.5}
                    layout='fill'
                  />
                </Box>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Box>
  )
}
