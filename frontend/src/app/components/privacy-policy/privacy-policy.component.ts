import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  terms = [
    {
      title: 'Application',
      content: `The following terms and conditions apply to all services accepted. All work carried out is subject to these terms and conditions except where changes are expressly agreed in writing. These terms and conditions should be read together with the quotation. If there is any conflict between the quotation and these terms and conditions, the provisions of the quotation shall prevail.`,
    },
    {
      title: 'Relationship of the Parties',
      content: `Nothing in this Agreement and no action taken by the parties pursuant to this agreement shall constitute,
      or be deemed to constitute a partnership, association, joint venture, agency or any other co-operative
      entity.`,
    },
    {
      title: 'Performance',
      content: `3.1 TimeLapse ME warrants to the Client that the Service will be provided using reasonable care and
      skill.
      </br>
      3.2 TimeLapse ME will use reasonable endeavours to carry out the Services by the date set out in the
      agreed timescale or such other date as may be mutually agreed.`,
    },
    {
      title: 'Client Obligations',
      content: `4.1 The Client agrees to cooperate with TimeLapse ME and shall provide any support, information and
      facilities to TimeLapse ME as may be required such as power and structures to mount the cameras on.
      TimeLapse Middle East will not be held responsible if the client fails to do so.
      </br>
      4.2 The Client will ensure that TimeLapse ME is provided in good time with all information needed to
      enable TimeLapse ME to perform the Services and TimeLapse ME will be entitled to rely on that
      information.
      </br>
      4.3 The Client will give all decisions and approvals in a timely manner and provide any additional
      assistance, which TimeLapse ME may reasonably request.`,
    },
    {
      title: 'Modifications',
      content: `Should the Client decide that changes are necessary to our documentaries, TimeLapse ME will wherever
      reasonably possible accept these changes subject to price agreement regarding the changes which
      may be required.`,
    },
    {
      title: 'Ownership',
      content: `Client cannot claim intellectual or exclusive ownership to any of our equipment modified or unmodified,
      all equipment is exclusive property of TimeLapse ME. All videos and images are the sole property of the
      client from the date of installation.`,
    },
    {
      title: 'Penalty/ Fine for Damages',
      content: `Any unauthorized removal/ shifting/ touching/ tampering/ loss/ handling/ mishandling of the equipment
      by the client or its third party on site will lead to immediate cancellation of the contract by the service
      provider and a liability of $ 10,000 per camera will be imposed on the client for such act. The client will
      be liable to pay the service provider for damages due to any negligence by the client or any of its third
      party on site.`,
    },
    {
      title: 'Price and Payment',
      content: `8.1 Unless stated otherwise, all prices are exclusive of VAT which shall be added to invoices at the
      prevailing rate.
      </br>
      8.2 Invoices will be issued as per the proposed schedule in the quotation. Payment of any balance will
      be due within 30 days of the invoice date. The Client agrees that time of payment of TimeLapse ME
      invoices shall be an essential term of the Agreement. If a client fails to pay two consecutive invoices for
      any reason, TimeLapse ME reserves the right to suspend its services without any intimation.`,
    },
    {
      title: 'Duration/Termination',
      content: `This Agreement shall subsist for the period specified in the quotation unless earlier terminated in terms
      of clause 10 hereof, or where no period is specified by either party giving at least one month prior
      written notice of termination. In the event of termination in whole or in part TimeLapse ME shall be
      entitled to be paid for all work which has been carried out prior to termination and the Client shall
      remain liable therefore.
      </br> 
      </br>
      9.1 Early Termination
      If contract is cancelled before the contract end date client will be liable to pay 50% of the balance
      contact value to TimeLapse ME as cancellation fees.
      </br>
      9.2 Partial Termination
      If contract is partially cancelled before the contract end date client will be liable to pay 50% of the
      partially cancelled contract value to TimeLapse ME as cancellation fees. (eg. If the contract is for 4
      cameras and if one camera is cancelled by the client for the balance duration of the contract).`,
    },
    {
      title: 'Force Majeure',
      content: `Neither party shall be liable for any breach of these terms cause by matters beyond their reasonable
      control, including but not limited to natural calamities industrial dispute (whether involving our
      employees or not), failures or interruptions of electricity supplies, weather of exceptional severity or acts
      of local or central government or other authorities.`,
    },
    {
      title: 'Jurisdiction',
      content: `This Agreement shall be construed and governed by the Federal and local laws applied in Emirate of
      Dubai and United Arab Emirates, and Dubai courts shall have the jurisdiction.`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
