const objOne = {
  1.0: 'Matt Johnson',
  1.1: 'Matt Johnson',
  1.2: 'Bart Paden',
  1.3: 'Ryan Doss',
  1.4: 'Jared Malcolm'
}

const objTwo = {
  2.0: 'Matt Johnson',
  2.1: 'Bart Paden',
  2.2: 'Bart Paden',
  2.3: 'Jordan Heigle',
  2.4: 'Jordan Heigle',
  2.5: 'Tyler Viles'
}

export const removeDuplicates = () => {
  const mergedObj = {...objOne, ...objTwo};
  const nameArray = Object.values(mergedObj);
  return [...new Set(nameArray)];
};