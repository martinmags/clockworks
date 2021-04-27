/** Color Config */
const color = {
  primaryColor: '#AB6C38',
  secondaryColor: '#6D4C41',
  darkGray: '#212121',
  lightGray: '#ECE2D9',
};

/** Specific themes */
export const lightTheme = {
  primaryColor: `${color.primaryColor}`,
  secondaryColor: `${color.secondaryColor}`,
  primaryGray: `${color.darkGray}`,
  secondaryGray: `${color.lightGray}`,
  backgroundColor: 'white',
  textColor: `${color.darkGray}`,
};

export const darkTheme = {
  primaryColor: `${color.secondaryColor}`,
  secondaryColor: `${color.primaryColor}`,
  primaryGray: `${color.lightGray}`,
  secondaryGray: `${color.darkGray}`,
  backgroundColor: `${color.darkGray}`,
  textColor: `${color.lightGray}`,
};
