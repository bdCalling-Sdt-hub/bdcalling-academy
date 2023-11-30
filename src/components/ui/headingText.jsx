const HeadingText = ({ sTitle, title }) => {
  return (
    <div className="text-center mb-8">
      <p className="text-lg text-primary">{sTitle}</p>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default HeadingText;
