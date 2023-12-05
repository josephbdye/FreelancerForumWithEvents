const freelancers = [];
const names = ['Dr. Slice', 'Dr. Pressure', 'Dr. Doom', 'Dr. Doolittle', 'Dr. Dye'];
const occupations = ['Gardener', 'Programmer', 'Artist', 'Teacher'];
const freelancersList = window.document.querySelector('#freelancersList');

function generateRandom(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const name = names[nameIdx];
    const occupationIdx = Math.floor(Math.random()*occupations.length);
    const occupation = occupations[occupationIdx];
    const cost = Math.ceil(Math.random() * 10);
    return {
        name,
        occupation,
        cost
    };
};

function render(){
  const lis = freelancers.map((freelancer)=>  {
    return `
      <li>
        ${freelancer.name} is a ${freelancer.occupation} and costs $${freelancer.cost.toFixed(2)} per hour.
      </li>`
    }).join('');
  freelancersList.innerHTML = lis;
};



freelancers.push(generateRandom());
freelancers.push(generateRandom());

render();