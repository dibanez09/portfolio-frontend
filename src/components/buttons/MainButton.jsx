const MainButton = (props) => {
  return (
    <button
      type="button"
      {...props}
      class={`hover:cursor-pointer mt-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ${props.className}`}>
      {props?.children}
    </button>
  );
};

export default MainButton;
