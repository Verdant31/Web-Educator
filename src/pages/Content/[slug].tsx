import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom'
import { Header } from '../../components/DashboardAccess/Header';
import { getPrismicClient } from '../../services/prismic'

interface ContentProps {
  content: {
    title: string;
    text: string;
  }
}

export default function Content({ content }: ContentProps) {
  return (
    <>
      <Header urlRedirect="/HighSchool" />
      <h1>{content.title}</h1>
      <div
            dangerouslySetInnerHTML={{ __html: content.text }}
      />
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
    text: RichText.asHtml(response.data.content1),
  }

  return {
    props: {
      content
    }
  }
}
