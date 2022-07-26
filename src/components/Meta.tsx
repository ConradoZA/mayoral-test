import Head from 'next/head';

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MetaProps): JSX.Element => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' type='image/svg+xml' href='/src/favicon.svg' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Mayoral',
  keywords: 'shop, store, clothes, children',
  description: 'Test assignment for Mayoral',
};

export default Meta;
