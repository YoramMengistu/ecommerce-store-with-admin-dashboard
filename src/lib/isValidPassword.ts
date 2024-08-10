// export async function isValidPassword(
//   password: string,
//   hashedPassword: string
// ) {
//   console.log(hashPassword(password));
//   return (await hashPassword(password)) === hashedPassword;
// }

// async function hashPassword(password: string) {
//   const arrayBuffer = await crypto.subtle.digest(
//     "SHA-512",
//     new TextEncoder().encode(password)
//   );

//   return Buffer.from(arrayBuffer).toString("base64");
// }
export async function isValidPassword(
  password: string,
  hashedPassword: string
) {
  const hashed = await hashPassword(password);
  console.log("Computed hash:", hashed);
  return hashed === hashedPassword;
}

async function hashPassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password)
  );
  return Buffer.from(arrayBuffer).toString("base64");
}
