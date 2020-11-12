interface props {
  text: string;
}

export default function Button({ text }: props) {
  return (
    <button>
      { text }
    </button>
  )
};
