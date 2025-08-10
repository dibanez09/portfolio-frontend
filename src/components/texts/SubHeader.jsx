const SubHeader = (props) => {
  return (
    <div className={`font-thin text-[1.2rem] ${props.className}`} {...props}>
      {props.children}
    </div>
  );
};

export default SubHeader;
