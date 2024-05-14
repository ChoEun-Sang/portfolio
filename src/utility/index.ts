export function maskName(name: string): string {
  const firstChar = name.charAt(0);
  const maskedPart = "*".repeat(name.length - 1);
  return firstChar + maskedPart;
}

export function truncateContact(contact: string, maxLength: number): string {
  if (contact.length > maxLength) {
    return contact.slice(0, maxLength) + "...";
  }
  return contact;
}
