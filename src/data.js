export const title = 'JavaScript Puzzle';

export const content = `Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when this link is clicked. If the operation has been completed already, notify the user that this has already been done.`;


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