interface TitleProps {
  content: string;
}

function Title({ content }: TitleProps) {
  return <h3>{content}</h3>;
}

export default Title;
