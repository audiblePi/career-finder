const defaults = {
  description: 'Curabitur mollis urna velit, non pellentesque ante dapibus vitae. Nulla tempus finibus purus, eget molestie libero ornare at. Mauris semper ligula id nisl semper, vitae bibendum dui viverra. Nulla facilisi. Etiam consequat nisi cursus nisi luctus sollicitudin. Nunc sed orci in sem feugiat blandit at sed ligula. Aliquam eleifend ipsum at lectus sodales, id gravida nisl viverra. Aenean viverra turpis vel libero rhoncus mattis. Duis vel velit vel augue vehicula dictum at vitae tortor. Suspendisse blandit non ex ac vulputate. Cras eu tempus odio. Nullam tempus tellus dui, non viverra ipsum ornare at. Nullam vel dolor condimentum leo mattis fringilla. Maecenas efficitur ex id ipsum luctus, nec tincidunt nulla scelerisque.',
  salary: '1,000,000',
  ditl:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero non mi congue, ac tristique tortor consectetur. Ut efficitur ligula ipsum, in vehicula sem congue non. Aliquam posuere nisi elit, at molestie velit viverra ut. Suspendisse imperdiet lectus sed ante dignissim, eu blandit nisl imperdiet. Aenean neque mi, pellentesque non venenatis et, pretium a erat. Aenean sollicitudin, justo quis volutpat viverra, neque justo tincidunt nibh, nec faucibus augue dolor vitae risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean pulvinar interdum leo, at porttitor libero venenatis sit amet. Duis aliquet turpis sit amet diam feugiat interdum. Donec sit amet posuere neque. Mauris consequat odio et viverra varius. Curabitur mollis urna velit, non pellentesque ante dapibus vitae. Nulla tempus finibus purus, eget molestie libero ornare at. Mauris semper ligula id nisl semper, vitae bibendum dui viverra. Nulla facilisi. Etiam consequat nisi cursus nisi luctus sollicitudin. Nunc sed orci in sem feugiat blandit at sed ligula. Aliquam eleifend ipsum at lectus sodales, id gravida nisl viverra. Aenean viverra turpis vel libero rhoncus mattis. Duis vel velit vel augue vehicula dictum at vitae tortor. Suspendisse blandit non ex ac vulputate. Cras eu tempus odio. Nullam tempus tellus dui, non viverra ipsum ornare at. Nullam vel dolor condimentum leo mattis fringilla. Maecenas efficitur ex id ipsum luctus, nec tincidunt nulla scelerisque. Aenean quis ante id odio dictum laoreet sit amet nec urna. Vestibulum dapibus mi et mauris suscipit, quis lobortis felis porttitor. Ut nec orci eu massa pretium ultricies. Fusce id ullamcorper quam. Quisque sit amet commodo metus. Proin convallis vulputate orci, eu dapibus diam iaculis in. Aliquam ultrices vehicula erat, eget volutpat dolor. Maecenas hendrerit leo vitae tincidunt porta. Fusce vestibulum ligula ut sapien vulputate, in tristique tellus rhoncus. Pellentesque maximus ac purus congue maximus. Pellentesque elementum velit massa, id pellentesque felis venenatis eget. Etiam dapibus nibh vitae tincidunt feugiat. Cras at tortor ut erat porta commodo. Pellentesque fringilla placerat elit a vulputate. Duis at purus vitae lacus blandit tempor in eget est. Cras sollicitudin rutrum pulvinar. Aliquam in accumsan ex. Quisque dapibus augue vitae dolor sagittis pharetra. Praesent elit nisl, placerat eu leo sed, pharetra egestas libero. Donec ultricies leo vitae leo tempus, non mollis velit laoreet. In malesuada nulla sed dapibus ornare. Phasellus tincidunt metus ut tortor ullamcorper iaculis. Maecenas nisi nisl, aliquet sollicitudin dolor ut, consequat eleifend ligula. Suspendisse pulvinar imperdiet erat. Fusce suscipit condimentum urna ut pretium. Nulla sit amet eleifend urna, nec fermentum turpis. Phasellus sapien massa, blandit sed ante in, suscipit volutpat ex. Morbi venenatis sapien orci, eget faucibus quam hendrerit a. Vestibulum fermentum ligula turpis. Nullam a nisi pulvinar neque laoreet luctus. Vivamus ligula erat, tincidunt et tempor ut, vehicula eget lacus. Sed eu dolor nisi. Vivamus eu dignissim lectus. Integer sapien enim, placerat ac odio ut, dictum dapibus enim. Nulla dictum nulla in lacinia aliquet.',
  celebrity: {
    name: 'Celebrity Name',
    photo: '/assets/astronaut.png',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero non mi congue, ac tristique tortor consectetur. Ut efficitur ligula ipsum, in vehicula sem congue non. Aliquam posuere nisi elit, at molestie velit viverra ut. Suspendisse imperdiet lectus sed ante dignissim, eu blandit nisl imperdiet. Aenean neque mi, pellentesque non venenatis et, pretium a erat. Aenean sollicitudin, justo quis volutpat viverra, neque justo tincidunt nibh, nec faucibus augue dolor vitae risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean pulvinar interdum leo, at porttitor libero venenatis sit amet. Duis aliquet turpis sit amet diam feugiat interdum. Donec sit amet posuere neque. Mauris consequat odio et viverra varius. Curabitur mollis urna velit, non pellentesque ante dapibus vitae. Nulla tempus finibus purus, eget molestie libero ornare at. Mauris semper ligula id nisl semper, vitae bibendum dui viverra. Nulla facilisi. Etiam consequat nisi cursus nisi luctus sollicitudin. Nunc sed orci in sem feugiat blandit at sed ligula. Aliquam eleifend ipsum at lectus sodales, id gravida nisl viverra. Aenean viverra turpis vel libero rhoncus mattis. Duis vel velit vel augue vehicula dictum at vitae tortor. Suspendisse blandit non ex ac vulputate. Cras eu tempus odio. Nullam tempus tellus dui, non viverra ipsum ornare at. Nullam vel dolor condimentum leo mattis fringilla. Maecenas efficitur ex id ipsum luctus, nec tincidunt nulla scelerisque. Aenean quis ante id odio dictum laoreet sit amet nec urna. Vestibulum dapibus mi et mauris suscipit, quis lobortis felis porttitor. Ut nec orci eu massa pretium ultricies. Fusce id ullamcorper quam. Quisque sit amet commodo metus. Proin convallis vulputate orci, eu dapibus diam iaculis in. Aliquam ultrices vehicula erat, eget volutpat dolor. Maecenas hendrerit leo vitae tincidunt porta. Fusce vestibulum ligula ut sapien vulputate, in tristique tellus rhoncus. Pellentesque maximus ac purus congue maximus. Pellentesque elementum velit massa, id pellentesque felis venenatis eget. Etiam dapibus nibh vitae tincidunt feugiat. Cras at tortor ut erat porta commodo. Pellentesque fringilla placerat elit a vulputate. Duis at purus vitae lacus blandit tempor in eget est. Cras sollicitudin rutrum pulvinar. Aliquam in accumsan ex. Quisque dapibus augue vitae dolor sagittis pharetra. Praesent elit nisl, placerat eu leo sed, pharetra egestas libero. Donec ultricies leo vitae leo tempus, non mollis velit laoreet. In malesuada nulla sed dapibus ornare. Phasellus tincidunt metus ut tortor ullamcorper iaculis. Maecenas nisi nisl, aliquet sollicitudin dolor ut, consequat eleifend ligula. Suspendisse pulvinar imperdiet erat. Fusce suscipit condimentum urna ut pretium. Nulla sit amet eleifend urna, nec fermentum turpis. Phasellus sapien massa, blandit sed ante in, suscipit volutpat ex. Morbi venenatis sapien orci, eget faucibus quam hendrerit a. Vestibulum fermentum ligula turpis. Nullam a nisi pulvinar neque laoreet luctus. Vivamus ligula erat, tincidunt et tempor ut, vehicula eget lacus. Sed eu dolor nisi. Vivamus eu dignissim lectus. Integer sapien enim, placerat ac odio ut, dictum dapibus enim. Nulla dictum nulla in lacinia aliquet.',
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
    name: 'Agricultural and Food Science Technicians',
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