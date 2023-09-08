interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create a personal profile',
    'View restaurant details',
    'View table details',
    'View restaurant menu',
    'Make a reservation',
  ],
  ownerAbilities: [
    'Manage restaurant profile',
    'Invite employees',
    'Manage restaurant tables',
    'Manage restaurant menus',
  ],
};
