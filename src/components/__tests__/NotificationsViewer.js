import NotificationsViewer from '../NotificationsViewer';
import renderer from 'react-test-renderer';
import delay from 'redux-saga';
import React from 'react';

jest.mock('../../services/NotificationsService');
const notificationsService = require('../../services/NotificationsService').default;

describe('The notifcations viewer', () => {

  beforeAll(() => {
    notificationsService.__setCount(42);
  });

  it('should display the correct number of notifications', async() => {

    const tree = renderer.create(<NotificationsViewer />)
    await delay();
    const instance = tree.root;
    const component = instance.findByProps({ className: 'notifications' });
    const text = component.children[0];

    expect(text).toEqual('42 Notifications');
  });
});
