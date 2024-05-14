interface TagProps {
  content: string;
}
function Tag({ content }: TagProps) {
  return (
    <div
      className={`bg-purple-500 py-1 px-2 max-w-fit text-xs rounded-md bg-g`}
    >
      {content}
    </div>
  );
}

export default Tag;
