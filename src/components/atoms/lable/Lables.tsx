import "./Lable.css";
type LableProps = {
    htmlfor: string;
    className: string;
    Children: React.ReactNode;
}
const Lable: React.FC<LableProps> = ({htmlfor,className,Children}) => {
  return (
    <div>
        <label
        htmlFor={htmlfor}
        className={`Lable ${className}`}>{Children}</label>
    </div>
  )
}

export default Lable 