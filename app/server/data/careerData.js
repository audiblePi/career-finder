const defaults = {
  image: '/assets/placeholder-image.png',
  description: 'Curabitur mollis urna velit, non pellentesque ante dapibus vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero non mi congue, ac tristique tortor consectetur.',
  salary: '1,000,000',
  ditl:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero non mi congue, ac tristique tortor consectetur.',
  ditlImage: '/assets/placeholder-image.png',
  celebrity: {
    name: 'Celebrity Name',
    photo: '/assets/astronaut.png',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero non mi congue, ac tristique tortor consectetur.',
  },
}

const agriculture = [
  {
    _id: 101,
    name: 'Agricultural Engineers',
    shortDescription: 'Solve problems that are related to the way farms work.',
    cluster: 1,
    ...defaults,
  },
  {
    _id: 102,
    name: 'Agricultural Equipment Operators',
    shortDescription: 'Drive and control farm equipment, like tractors, balers, or tillers.',
    cluster: 1,
    ...defaults,
  },
  {
    _id: 103,
    name: 'Agricultural Graders and Sorters',
    shortDescription: 'Sort or classify raw food or other agricultural products.',
    cluster: 1,
    ...defaults,
  },
  {
    _id: 104,
    name: 'Agricultural Technicians',
    shortDescription: 'Work to make sure farms are productive and the food produced on them is safe.',
    cluster: 1,
    ...defaults,
  },
  {
    _id: 105,
    name: 'Animal Breeders',
    shortDescription: 'Breed animals according to certain genetic traits.',
    cluster: 1,
    ...defaults,
  },
];

const architecture = [
  {
    _id: 201,
    name: 'Architects',
    shortDescription: 'Plan and design buildings, including residences, office buildings, and other properties.',
    cluster: 2,
    ...defaults,
  },
];

const arts = [
  {
    _id: 301,
    name: 'Actors',
    shortDescription: 'Play parts in TV, radio, or stage productions.',
    cluster: 3,
    ...defaults,
  },
];

const business = [
  {
    _id: 401,
    name: 'Administrative Service Managers',
    shortDescription: 'Oversee clerical or logistical activities for businesses.',
    cluster: 4,
    ...defaults,
  },
];

const education = [
  {
    _id: 501,
    name: 'Adapted Physical Education Specialists',
    shortDescription: 'Provide physical education to children or adults with special needs.',
    cluster: 5,
    ...defaults,
  },
];

const finance = [
  {
    _id: 601,
    name: 'Accountants and Auditors',
    shortDescription: 'Interpret budget statements in order to give financial advice.',
    cluster: 6,
    ...defaults,
  },
];

const government = [
  {
    _id: 701,
    name: 'Agricultural Inspectors',
    shortDescription: 'Inspect agricultural products and equipment to make sure they comply with health and safety laws.',
    cluster: 7,
    ...defaults,
  }, 
];

const health = [
  {
    _id: 801,
    name: 'Acupuncturists',
    shortDescription: 'Treat symptoms of disease with needles.',
    cluster: 8,
    ...defaults,
  },   
];

const hospitality = [
  {
    _id: 901,
    name: 'Amusement and Recreation Attendants',
    shortDescription: 'Perform various duties at amusement parks or other recreation facilities.',
    cluster: 9,
    ...defaults,
  },
];

const human = [
  {
    _id: 1001,
    name: 'Barbers',
    shortDescription: 'Provide services like cutting, shampooing, or styling hair, or shaving.',
    cluster: 10,
    ...defaults,
  },
];

const it = [
  {
    _id: 1101,
    name: 'Applications Software Developers',
    shortDescription: 'Develop and modify computer applications software.',
    cluster: 11,
    ...defaults,
  },
];

const law = [
  {
    _id: 1201,
    name: 'Administrative Law Judges',
    shortDescription: 'Conduct hearings and make decisions on claims related to government programs.',
    cluster: 12,
    ...defaults,
  },  
];

const manufacturing = [
  {
    _id: 1301,
    name: 'Adhesive Bonding Machine Operators',
    shortDescription: 'Run machines that use adhesives to join items together; for example, gluing paper.',
    cluster: 13,
    ...defaults,
  },  
];

const marketing = [
  {
    _id: 1401,
    name: 'Advertising Sales Agents',
    shortDescription: 'Sell advertising space in media outlets, like television or radio.',
    cluster: 14,
    ...defaults,
  },  
];

const stem = [
  {
    _id: 1501,
    name: 'Aerospace Engineers',
    shortDescription: 'Design, construct, and test aircraft.',
    cluster: 15,
    ...defaults,
  }, 
];

const transportation = [
  {
    _id: 1601,
    name: 'Air Traffic Controllers',
    shortDescription: 'Control the flow of air traffic, giving airline pilots clearance for takeoff and landing.',
    cluster: 16,
    ...defaults,
  }, 
];

module.exports = [ 
  ...agriculture, 
  ...architecture, 
  ...arts,
  ...business,
  ...education,
  ...finance,
  ...government,
  ...health,
  ...hospitality,
  ...human,
  ...it,
  ...law,
  ...manufacturing,
  ...marketing,
  ...stem,
  ...transportation,
];