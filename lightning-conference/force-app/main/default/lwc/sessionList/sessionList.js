import { LightningElement, wire, api } from 'lwc';
import getSessions from '@salesforce/apex/SessionController.getSessions';

export default class SessionList extends LightningElement {
  sessions = [];
  searchKey = '';
  @wire(getSessions, { searchKey: '$searchKey' })
  wiredSessions({ error, data }) {
    if (data) {
      this.sessions = data;
    } else if (error) {
      this.sessions = [];
      throw new Error('Failed to retrieve sessions');
    }
  }
  handleSearchKeyInput(event) {
    clearTimeout(this.delayTimeout);
    const searchKey = event.target.value;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
        this.searchKey = searchKey;
    }, 300);
  }
  handleSessionClick(event) {
    const { sessionId } = event.currentTarget.dataset;
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        state: 'details',
        sessionId: sessionId
      }
    });
    this.dispatchEvent(navigateEvent);
  }
  // connectedCallback() {
  //   this.sessions = this.allSessions = [
  //     {
  //       id: '1',
  //       name: 'Mock session',
  //       dateTime: '2099-01-01 00:00:00',
  //       room: 'Mock room',
  //       description: "Mock description",
  //       speakers: [
  //         {
  //           id: '1',
  //           name: 'Mock speaker 1',
  //           bio: 'Bio for mock speaker 1',
  //           email: 'mock1@trailhead.com',
  //           pictureUrl:'https://developer.salesforce.com/files/js-dev/speaker-images/john_doe.jpg'
  //         },
  //         {
  //           id: '2',
  //           name: 'Mock speaker 2',
  //           bio: 'Bio for mock speaker 2',
  //           email: 'mock2@trailhead.com',
  //           pictureUrl:'https://developer.salesforce.com/files/js-dev/speaker-images/laetitia_arevik.jpg'
  //         }
  //       ]
  //     }
  //   ];
  // }
  // handleSearchKeyInput(event) {
  //   const searchKey = event.target.value.toLowerCase();
  //   this.sessions = this.allSessions.filter(
  //     session => session.name.toLowerCase().includes(searchKey)
  //   );
  // }
  // handleSessionClick(event) {
  //   const index = event.currentTarget.dataset.index;
  //   const navigateEvent = new CustomEvent('navigate', {
  //     detail: {
  //       state: 'details',
  //       sessionId: this.sessions[index].id
  //     }
  //   });
  //   this.dispatchEvent(navigateEvent);
  // }
}