export default function Card(props) {
  return (
    <div
      class="bg-white p-4 text-center rounded-md shadow-md"
      classList={{
        "rounded-md": props.rounded,
        "shadow-md": !props.flat,
        "bg-neutral-900": props.dark,
        "text-white": props.dark,
      }}
    >
      {props.children}
    </div>
  );
}
