export default class ModuleSettings {
  prefix() {
    return 'settings';
  }

  tabs() {
    return [
      {
        id: 'settings',
        label: 'Settings',
        screen: 'settings.settingsScreen',
        component: require('./ModuleSettingsScreen').default,
      },
    ];
  }
}
