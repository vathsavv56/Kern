
interface ComponentBlockProps {
  readonly heading:string;
  readonly about:string;
  readonly image?:string;

}


const ComponentBlock = ({heading , about , image}:ComponentBlockProps) => {
  return (
    <div className="">
        <h3>{heading}</h3>
        <p>{about}</p>
        {image && <img src={image} alt={heading} />}
    </div>
  )
}

export default ComponentBlock