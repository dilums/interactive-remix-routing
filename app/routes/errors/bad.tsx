const filePath = "./routes/errors/bad.tsx";

export default function ErrorBad(props) {
  const test = props.somethingThatDoesNotExist.propertyOfAnUndifined;
  return (
    <div className="component">
      <div className="component-path">{filePath}</div>
    </div>
  );
}
