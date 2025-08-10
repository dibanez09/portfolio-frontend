const MainHeader = (props) => {
  return (
    <p
      className={`font-Montserrat font-thin text-[2.5rem] text-white  ${props.className}`}
      {...props}>
      {props.children}
    </p>
  );
};

export default MainHeader;
