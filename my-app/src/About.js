import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 5, md: 10 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            About <br />
            <Text as={'span'} color={'green.400'}>
              GDG Medea
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            GDG Medea is a local community located at the National Higher School
            of Computer Science, Algiers, Algeria.It is part of the big global
            community of developers "Google Developers Group" (960 communities
            worldwide) Our community is made up of passionate developers and
            motivated young students.It has started from the simple status of
            GTUG (Google Technology User Group) in 2011 to become today one of
            the most active GDGs in the MENA region.GDG Algiers Chapter hosts a
            variety of technical activities for developers through the different
            events we organize, aiming to help the developers community get the
            latest technology updates.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
          </Stack>
        </Stack>
      </Container>
    </>
  );
}