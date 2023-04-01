/* eslint-disable prettier/prettier */

// positionOccupied Discussion
export const dataRepresentative = (representative: any) => {
  return {
    firstName: representative.firstName,
    middleName: representative.middleName,
    lastName: representative.lastName,
    dateOfBirth: representative.dob,
    placeOfBirth: representative.placeOfBirth,
    positionOccupied: representative.placedIssuance,
    nationality: representative.nationality,
    countryOfResidence: representative.countryOfResidence,
    zipCode: representative.zipCode,
    email: representative.email,
    phoneNumbers: {
      Home: representative.homePhoneNumber.toString(),
      Cell: representative.cellNumber.toString(),
    },
    address: representative.address,
  };
};
