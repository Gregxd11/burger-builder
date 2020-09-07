const aux = props => {
  return props.children;
};

export default aux;

//this component is just to wrap other components so they can be adjacent to one another. Props.children will pass the children elements of said component when it is invoked.
