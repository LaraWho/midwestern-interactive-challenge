const array1 = ['Matt Johnson', 'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm']

const array2 = ['Matt Johnson', 'Bart Paden', 'Bart Paden', 'Jordan Heigle', 'Jordan Heigle', 'Tyler Viles']

export const removeDuplicates = () => {
  const newArray = array1.concat(array2);
  return [...new Set(newArray)];
};