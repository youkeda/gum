export function removeKeywork(key: string) {
  return key.replace(/<%[\s\S].*?%>/g, '');
}
