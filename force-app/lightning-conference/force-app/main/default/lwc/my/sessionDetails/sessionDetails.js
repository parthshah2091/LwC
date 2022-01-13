import { LightningElement, api } from 'lwc';
// import { getSession } from 'data/sessionService';
export default class SessionDetails extends LightningElement {
  session;
  @api
  set sessionId(id) {
    this.sessionId = id;
    this.session = {
      id: '1',
      name: 'Mock session',
      dateTime: '2099-01-01 00:00:00',
      room: 'Mock room',
      description: "Mock description",
      speakers: [
        {
          id: '1',
          name: 'Mock speaker 1',
          bio: 'Bio for mock speaker 1',
          email: 'mock1@trailhead.com',
          pictureUrl: 'https://developer.salesforce.com/files/js-dev/speaker-images/john_doe.jpg'
        },
        {
          id: '2',
          name: 'Mock speaker 2',
          bio: 'Bio for mock speaker 2',
          email: 'mock2@trailhead.com',
          pictureUrl: 'https://developer.salesforce.com/files/js-dev/speaker-images/laetitia_arevik.jpg'
        }
      ]
    };
  }
  get sessionId() {
    return this.sessionId;
  }
  handleSessionsClick() {
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        state: 'list'
      }
    });
    this.dispatchEvent(navigateEvent);
  }
}