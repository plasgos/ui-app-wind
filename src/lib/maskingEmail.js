export const maskingEmail = email => {
  // Mencari posisi dari simbol @
  const atIndex = email.indexOf('@');

  // Mengambil bagian sebelum @
  const username = email.substring(0, atIndex);

  // Menyusun bagian setelah @ (domain) dan ekstensi domain
  const domainParts = email.substring(atIndex + 1).split('.');
  const domain = domainParts[0];
  const domainExtension = domainParts[1];

  // Masking bagian username dengan mengganti karakter kecuali dua pertama dengan *
  const unmaskedLength = Math.min(2, username.length);
  const maskedUsername =
    username.substring(0, unmaskedLength) +
    '*'.repeat(username.length - unmaskedLength);

  // Menggabungkan kembali username yang sudah dimasking dengan domain dan ekstensi domain
  const maskedEmail = maskedUsername + '@' + domain + '.' + domainExtension;

  return maskedEmail;
};
