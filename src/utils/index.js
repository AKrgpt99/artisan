export const CATEGORIES = [
  { value: "Art" },
  { value: "Collectibles" },
  { value: "Music" },
  { value: "Photography" },
  { value: "Cinematography" },
  { value: "Animation" },
  { value: "Sports" },
  { value: "Utility" },
  { value: "Trading Cards" },
];

export function websiteIsValid(external) {
  return external.match(
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  );
}

export function instagramUsernameIsValid(handle) {
  return handle.match(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
}

export function twitterUsernameIsValid(handle) {
  return handle.match(/^[a-zA-Z0-9_]{1,15}$/);
}

export function pathIsValid(path) {
  return path.match(/[^\s/]+?(?=\b)/);
}

export function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
