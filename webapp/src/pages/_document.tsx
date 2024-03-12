import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps
} from '@mui/material-nextjs/v14-pagesRouter';
import {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="ja-jp">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
      </Head>
      <DocumentHeadTags {...props} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
