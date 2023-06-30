export const fetchColors = async (colorSetter) => {
  let response = await fetch(`https://${process.env.REACT_APP_PROJECT}.firebaseio.com/colors.json`);
  response = await response.json();
  const fetchedColors = [];
  for (const key in response) {
    fetchedColors.push({
      type: response[key].type,
      color: response[key].color,
    });
  }
  colorSetter(fetchedColors);
};
