import { Box, Button, chakra, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const callouts = [
  {
    name: 'Tejido',
    description: 'Work from home accessories',
    imageSrc: '/images/photo4990064073496439092.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Costura',
    description: 'Journals and note-taking',
    imageSrc: '/images/photo4987812273682753992.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Joyas',
    description: 'Daily commute essentials',
    imageSrc: '/images/photo4987812273682753990.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export const Categories = () => {

  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "layout", "src", "alt"].includes(prop),
  });

  const router = useRouter();

  return (
    <Box
      background='gray.100'
    >
      <Box
        paddingX={{ base: '1rem', sm: '1.5rem', lg: '2rem' }}
        marginX='auto'
        maxWidth='7xl'
      >
        <Box
          maxWidth={{ base: '2xl', lg: 'none' }}
          paddingY={{ base: '2rem', sm: '3rem', lg: '5rem' }}
          marginX={{ base: '1rem', lg: 'auto' }}
        >
          <Text
            fontSize='2xl'
            fontWeight={900}
            color='gray.900'
          >
            Categorías
          </Text>
          <SimpleGrid
            marginTop='1.5rem'
            spacingY={{ base: '3rem', lg: '0rem' }}
            columns={{ base: 0, lg: 3 }}
            spacingX={{ base: '0rem', lg: '1.5rem' }}
          >
            {
              callouts.map((callout) => (
                <Box
                  key={callout.name}
                  position='relative'
                  borderRadius='0.5rem'
                >
                  <Box
                    position='relative'
                    width='full'
                    overflow='hidden'
                    borderRadius='0.5rem'
                    height={{ base: '20rem', sm: '16rem' }}
                  >
                    <NextImage
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      objectFit='cover'
                      objectPosition='center'
                      layout='fill'
                    />
                  </Box>
                  <Button
                    position='absolute'
                    variant='unstyled'
                    onClick={() => router.push(`/categoria/${callout.href}`)}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    paddingTop='1.25rem'
                    paddingLeft='1.25rem'
                    fontSize='3xl'
                    fontWeight={500}
                    color='gray.200'
                    background='rgba(0, 0, 0, 0.6)'
                    width='full'
                    height='full'
                    sx={{
                      '&:hover': {
                        background: 'rgba(0, 0, 0, 0.4)',
                      }
                    }}
                  >
                    {callout.name}
                  </Button>
                </Box>
              ))
            }
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
