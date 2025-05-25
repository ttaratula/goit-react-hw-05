export default function Review({ data }) {
    return (
      <>
        <h4>{data.author}</h4>
        <p>{data.content}</p>
      </>
    );
  }