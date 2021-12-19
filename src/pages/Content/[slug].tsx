//Chakra-ui
import { Flex, Stack, Text } from '@chakra-ui/react';

//Next
import {  GetStaticProps } from 'next';

//Prismic
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'

//Components
import { Header } from '../../components/DashboardAccess/Header';

//React-icons
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

//Styles
import styles from './content.module.scss';


interface ContentProps {
  content: {
    title: string;
    chapter: string;
    text: string;
  }
}

export default function Content({ content }: ContentProps) {
  console.log(content.text)
  return (
    <>
      <Header urlRedirect="/HighSchool" />
      <Text mt="4rem" mb="3rem" fontSize="3rem" color="#c3073f"fontWeight="bold" mx="auto" align="center">{content.title.toUpperCase()}</Text>
      <Text mt="4rem" mb="3rem" fontSize="3rem" color="white"fontWeight="bold" mx="auto" align="center">{content.chapter}</Text>
      
      <div  
        dangerouslySetInnerHTML={{ __html: content.text}}
        className={styles.content}
      />
      <Flex width="50rem" mx="auto" justifyContent="space-between" mb="10rem">
        <Stack direction="row" alignItems="center" spacing="2rem">
          <FaArrowLeft size={40} color="#950740" />
          <Text fontWeight="bold" color="#950740" fontSize="2rem">PREVIOUS PAGE</Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="2rem">
          <Text fontWeight="bold" color="#950740" fontSize="2rem">NEXT PAGE</Text>
          <FaArrowRight size={40} color="#950740" />
        </Stack>

      </Flex>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async (params) => {
  const slug  = params;
  const prismic = getPrismicClient()

  const response = await prismic.getByUID('yearcontents', String(slug.params?.slug), {})
  const content = {
    title: RichText.asText(response.data.title),
    chapter: RichText.asText(response.data.chapter),
    text: RichText.asHtml(response.data.content1),
  }
  return {
    props: {
      content
    }
  }
}
