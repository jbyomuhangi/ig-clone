interface AppNavButtonInterface {
  name: string;
  href: string;
}

const appNavButtons: { [key: string]: AppNavButtonInterface } = {
  home: { name: "Home", href: "/" },
  profile: { name: "Profile", href: "/profile" },
};

export const defaultNavBarButtons: AppNavButtonInterface[] = [
  appNavButtons.home,
  appNavButtons.profile,
];

export const extraSmallScreenNavBarButtons: AppNavButtonInterface[] = [
  appNavButtons.home,
  appNavButtons.profile,
];
