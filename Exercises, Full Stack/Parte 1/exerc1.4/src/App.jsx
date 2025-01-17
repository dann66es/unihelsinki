const Header = ({course}) => <h1>{course}</h1>;


const ConTent = ( {parts} ) => {
return (

<div>

  {parts.map((parts, index) => (

    <p key = {index}> {parts.name} {parts.exercises}</p>

))}

</div>

)
}


const TotEx = ({parts}) => {


  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return(

  <div>

    <p>Total Exercises: {totalExercises}</p>  

  </div>
 

  );
};


    const App = () => {
      const course = 'Half Stack application development'
      const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    
      return (
      
      <div>

    <Header course={course}/>
    <ConTent parts= {parts}/>
    <TotEx parts={parts}/>
     
      </div>
      
    )
    }

export default App;

