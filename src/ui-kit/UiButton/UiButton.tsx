const UiButton = (props) => {
  // const onClick = props.onClick
  console.log("props", props);
  const { onClick, children } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default UiButton;

/* <UiButton
  onClick={handleClick}
  label="Метка"
/>

UiButton({
  onClick: handleClick,
  label: 'Метка',
})
 */
