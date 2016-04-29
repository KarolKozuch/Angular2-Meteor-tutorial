import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Parties} from '../../../collections/parties.ts';

@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html'
})
export class PartyDetails {
	party: Object;

    constructor(params: RouteParams) {
    var partyId = params.get('partyId');
    this.party = Parties.findOne(partyId);
  }

}