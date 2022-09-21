import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

const PLUGIN_NAME = 'ReactCrmPlugin';
import AgentView from './components/AgentView/AgentView';

export default class ReactCrmPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };   
    flex.AgentDesktopView.Panel2.Content.replace(<AgentView key="ReactCrmPlugin-component" />, options);   
  }
}
