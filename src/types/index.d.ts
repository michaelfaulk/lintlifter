export type Feature = {
  phone: Phone;
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Phone = {
  enable: boolean;
  formatted: string;
  link: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type Video = {
  embed: string;
  content: string;
  title: string;
}