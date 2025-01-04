import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
}

const SEO = ({ title, description, type = "website", name = "Pintores El Cañaveral" }: SEOProps) => {
  const fullTitle = `${title} | ${name}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="ES-M" />
      <meta name="geo.placename" content="El Cañaveral, Madrid" />
      <meta name="geo.position" content="40.4378698;-3.5797852" />
      <meta name="ICBM" content="40.4378698, -3.5797852" />
    </Helmet>
  );
};

export default SEO;