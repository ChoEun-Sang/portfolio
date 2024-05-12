interface TagProps {
  content: string;
}
function Tag({ content }: TagProps) {
  let tag_color;

  switch (content) {
    case "React":
      tag_color = `bg-blue-500`;
      break;
    case "Next.js":
      tag_color = `bg-gray-500`;
      break;
    case "TypeScript":
      tag_color = `bg-blue-600`;
      break;
    case "Zustand":
      tag_color = `bg-green-600`;
      break;
    case "Tailwind":
      tag_color = `bg-purple-600`;
      break;
    case "Emotion":
      tag_color = `bg-orange-600`;
      break;
    case "SCSS":
      tag_color = `bg-pink-600`;
      break;
    default:
      tag_color = `bg-gray-300`;
      break;
  }

  return (
    <div className={`${tag_color} p-1 max-w-fit text-xs rounded-md bg-g`}>
      {content}
    </div>
  );
}

export default Tag;
