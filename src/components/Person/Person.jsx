export const Person = ({ person }) => {
    let partnerText;
  
    if (person.isMarried) {
      partnerText = person.sex === 'f'
        ? `${person.partnerName} is my husband`
        : `${person.partnerName} is my wife`;
    } else {
      partnerText = 'I am not married';
    }
  
    return (
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        
        {person.age && <p className="Person__age">I am {person.age}</p>}
  
        <p className="Person__partner">{partnerText}</p>
      </section>
    );
  };
  