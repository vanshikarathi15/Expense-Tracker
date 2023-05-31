import './Card.css'
function Card(props){
//We want that this Card component allows the classes assigned already in the custom component tp be implemented
//bcoz otherwise the className used in ExpenseItem inside card component will not be implemented
//for that we add all classes in a constant and then put it here
    const classes='card '+props.className;//the card is a class in card.css , props.classname adds the 
    //class of other components
    return <div className={classes}>{props.children}</div>;
}
export default Card;