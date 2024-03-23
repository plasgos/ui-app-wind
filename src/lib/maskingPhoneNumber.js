export const maskPhoneNumber = phoneNumber => {
  if (!phoneNumber || phoneNumber.length < 10) {
    return '';
  }

  // Bagian pertama
  const firstPart = phoneNumber.substring(0, phoneNumber.length - 8);
  // Bagian kedua
  const secondPart = phoneNumber.substring(
    phoneNumber.length - 8,
    phoneNumber.length - 4,
  );
  // Bagian ketiga
  const thirdPart = phoneNumber.substring(
    phoneNumber.length - 4,
    phoneNumber.length - 2,
  );
  // Bagian keempat
  const fourthPart = phoneNumber.substring(phoneNumber.length - 2);

  // Gabungkan semua bagian dengan bintang di antaranya
  return `${'*'.repeat(firstPart.length)}_${'*'.repeat(
    secondPart.length,
  )}_${'*'.repeat(thirdPart.length)}${fourthPart}`;
};
