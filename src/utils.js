export function howOldAmI() {
  const birthDate = new Date(1995, 8, 4);
  const currentDate = new Date();
  let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();

  if (currentDate.getMonth() < birthDate.getMonth()) {
    return yearsDiff - 1;
  }

  if (currentDate.getDate() < birthDate.getDate()) {
    return yearsDiff - 1;
  }

  return yearsDiff;
}
