export default function SomeComponent({ label }: { label: string }) {
  return (
    <div className="">
      <div>{label} </div>
      <div className="grid">
        <div className="grid-item" id="grid-item-1">
          1
        </div>
        <div className="grid-item" id="grid-item-2">
          2
        </div>
        <div className="grid-item" id="grid-item-3">
          3
        </div>
        <div className="grid-item" id="grid-item-4">
          4
        </div>
      </div>
    </div>
  );
}
