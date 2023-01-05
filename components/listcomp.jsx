const listcomp = (props) => {
  const { content } = props;

  return (
    <div>
      {content.map((liste, cle, color_style_ul) => (
        <ul key={cle} className={color_style_ul}>
          {liste.map((cle2, textinside_li, color_style_li) => (
            <li key={cle2} className={color_style_li}>
              {textinside_li}
            </li>
          ))}
        </ul>
      ))}
      )
    </div>
  );
};

export default listcomp;
