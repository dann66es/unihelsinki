  const Header = ({ course }) => <h1>{course}</h1>;

  const Sum = ({ exercises}) => {

  let total = 0;

  for (let i = 0; i < exercises.length; i++){

    total += exercises[i];

  }
    return (
      <p>Total Exercises: {total} </p>
    )
  }

  const Nam = ({content}) => {
  return (
    
  <div>
      {content.map((part, index) => (
        <p key= {index} > {part.name} {part.exercises}</p> 

      ))}
  </div>

    );

    };


  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

    

    const exercises = [part1.exercises, part2.exercises, part3.exercises];
    const content = [part1, part2, part3];
    
    
    return (

      <div>
        
      <Header course={course}/>
      <Nam content={content}/>
      <Sum exercises={exercises}/>


      </div>
    )
  }

  export default App;
