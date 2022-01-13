import { LightningElement } from 'lwc';
// import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
  sessions = [];
  connectedCallback() {
    this.sessions = this.allSessions = [
      {
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
            pictureUrl:'https://developer.salesforce.com/files/js-dev/speaker-images/john_doe.jpg'
          },
          {
            id: '2',
            name: 'Mock speaker 2',
            bio: 'Bio for mock speaker 2',
            email: 'mock2@trailhead.com',
            pictureUrl:'https://developer.salesforce.com/files/js-dev/speaker-images/laetitia_arevik.jpg'
          }
        ]
      }
    ];
  }
  handleSearchKeyInput(event) {
    const searchKey = event.target.value.toLowerCase();
    this.sessions = this.allSessions.filter(
      session => session.name.toLowerCase().includes(searchKey)
    );
  }
  handleSessionClick(event) {
    const index = event.currentTarget.dataset.index;
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        state: 'details',
        sessionId: this.sessions[index].id
      }
    });
    this.dispatchEvent(navigateEvent);
  }
}