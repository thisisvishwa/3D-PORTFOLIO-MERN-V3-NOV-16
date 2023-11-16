import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const useSEO = ({ title, description }) => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t(title)}</title>
      <meta name="description" content={t(description)} />
      <meta property="og:title" content={t(title)} />
      <meta property="og:description" content={t(description)} />
    </Helmet>
  );
};

export default useSEO;