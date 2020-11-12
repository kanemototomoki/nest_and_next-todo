interface props {
  text: string;
}

export default function Button({ text }: props) {
  return (
    <a href="#">
      { text }
    </a>
  )
};
