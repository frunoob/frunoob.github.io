(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{445:function(e,t,n){"use strict";n.r(t);var o=n(5),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"bmoney"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bmoney"}},[e._v("#")]),e._v(" bmoney")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("author：Wei Dai")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://www.weidai.com/bmoney.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("戴维"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("I am fascinated by Tim May's crypto-anarchy. Unlike the communities\ntraditionally associated with the word \"anarchy\", in a crypto-anarchy the\ngovernment is not temporarily destroyed but permanently forbidden and\npermanently unnecessary. It's a community where the threat of violence is\nimpotent because violence is impossible, and violence is impossible\nbecause its participants cannot be linked to their true names or physical\nlocations.\n\nUntil now it's not clear, even theoretically, how such a community could\noperate. A community is defined by the cooperation of its participants,\nand efficient cooperation requires a medium of exchange (money) and a way\nto enforce contracts. Traditionally these services have been provided by\nthe government or government sponsored institutions and only to legal\nentities. In this article I describe a protocol by which these services\ncan be provided to and by untraceable entities.\n\nI will actually describe two protocols. The first one is impractical,\nbecause it makes heavy use of a synchronous and unjammable anonymous\nbroadcast channel. However it will motivate the second, more practical\nprotocol. In both cases I will assume the existence of an untraceable\nnetwork, where senders and receivers are identified only by digital\npseudonyms (i.e. public keys) and every messages is signed by its sender\nand encrypted to its receiver.\n\nIn the first protocol, every participant maintains a (seperate) database\nof how much money belongs to each pseudonym. These accounts collectively\ndefine the ownership of money, and how these accounts are updated is the\nsubject of this protocol.\n\n1. The creation of money. Anyone can create money by broadcasting the\nsolution to a previously unsolved computational problem. The only\nconditions are that it must be easy to determine how much computing effort\nit took to solve the problem and the solution must otherwise have no\nvalue, either practical or intellectual. The number of monetary units\ncreated is equal to the cost of the computing effort in terms of a\nstandard basket of commodities. For example if a problem takes 100 hours\nto solve on the computer that solves it most economically, and it takes 3\nstandard baskets to purchase 100 hours of computing time on that computer\non the open market, then upon the broadcast of the solution to that\nproblem everyone credits the broadcaster's account by 3 units.\n\n2. The transfer of money. If Alice (owner of pseudonym K_A) wishes to\ntransfer X units of money to Bob (owner of pseudonym K_B), she broadcasts\nthe message \"I give X units of money to K_B\" signed by K_A. Upon the\nbroadcast of this message, everyone debits K_A's account by X units and\ncredits K_B's account by X units, unless this would create a negative\nbalance in K_A's account in which case the message is ignored.\n\n3. The effecting of contracts. A valid contract must include a maximum\nreparation in case of default for each participant party to it. It should\nalso include a party who will perform arbitration should there be a\ndispute. All parties to a contract including the arbitrator must broadcast\ntheir signatures of it before it becomes effective. Upon the broadcast of\nthe contract and all signatures, every participant debits the account of\neach party by the amount of his maximum reparation and credits a special\naccount identified by a secure hash of the contract by the sum the maximum\nreparations. The contract becomes effective if the debits succeed for\nevery party without producing a negative balance, otherwise the contract\nis ignored and the accounts are rolled back. A sample contract might look\nlike this:\n\nK_A agrees to send K_B the solution to problem P before 0:0:0 1/1/2000.\nK_B agrees to pay K_A 100 MU (monetary units) before 0:0:0 1/1/2000. K_C\nagrees to perform arbitration in case of dispute. K_A agrees to pay a\nmaximum of 1000 MU in case of default. K_B agrees to pay a maximum of 200\nMU in case of default. K_C agrees to pay a maximum of 500 MU in case of\ndefault.\n\n4. The conclusion of contracts. If a contract concludes without dispute,\neach party broadcasts a signed message \"The contract with SHA-1 hash H\nconcludes without reparations.\" or possibly \"The contract with SHA-1 hash\nH concludes with the following reparations: ...\" Upon the broadcast of all\nsignatures, every participant credits the account of each party by the\namount of his maximum reparation, removes the contract account, then\ncredits or debits the account of each party according to the reparation\nschedule if there is one.\n\n5. The enforcement of contracts. If the parties to a contract cannot agree\non an appropriate conclusion even with the help of the arbitrator, each\nparty broadcasts a suggested reparation/fine schedule and any arguments or\nevidence in his favor. Each participant makes a determination as to the\nactual reparations and/or fines, and modifies his accounts accordingly.\n\nIn the second protocol, the accounts of who has how much money are kept by\na subset of the participants (called servers from now on) instead of\neveryone. These servers are linked by a Usenet-style broadcast channel.\nThe format of transaction messages broadcasted on this channel remain the\nsame as in the first protocol, but the affected participants of each\ntransaction should verify that the message has been received and\nsuccessfully processed by a randomly selected subset of the servers.\n\nSince the servers must be trusted to a degree, some mechanism is needed to\nkeep them honest. Each server is required to deposit a certain amount of\nmoney in a special account to be used as potential fines or rewards for\nproof of misconduct. Also, each server must periodically publish and\ncommit to its current money creation and money ownership databases. Each\nparticipant should verify that his own account balances are correct and\nthat the sum of the account balances is not greater than the total amount\nof money created. This prevents the servers, even in total collusion, from\npermanently and costlessly expanding the money supply. New servers can\nalso use the published databases to synchronize with existing servers.\n\nThe protocol proposed in this article allows untraceable pseudonymous\nentities to cooperate with each other more efficiently, by providing them\nwith a medium of exchange and a method of enforcing contracts. The\nprotocol can probably be made more efficient and secure, but I hope this\nis a step toward making crypto-anarchy a practical as well as theoretical\npossibility.\n\n-------\n\nAppendix A: alternative b-money creation\n\nOne of the more problematic parts in the b-money protocol is money\ncreation. This part of the protocol requires that all of the account\nkeepers decide and agree on the cost of particular computations.\nUnfortunately because computing technology tends to advance rapidly and\nnot always publicly, this information may be unavailable, inaccurate, or\noutdated, all of which would cause serious problems for the protocol.\n\nSo I propose an alternative money creation subprotocol, in which account\nkeepers (everyone in the first protocol, or the servers in the second\nprotocol) instead decide and agree on the amount of b-money to be created\neach period, with the cost of creating that money determined by an\nauction. Each money creation period is divided up into four phases, as\nfollows:\n\n1. Planning. The account keepers compute and negotiate with each other to\ndetermine an optimal increase in the money supply for the next period. \nWhether or not the account keepers can reach a consensus, they each\nbroadcast their money creation quota and any macroeconomic calculations\ndone to support the figures. \n\n2. Bidding. Anyone who wants to create b-money broadcasts a bid in the\nform of <x, y> where x is the amount of b-money he wants to create, and y\nis an unsolved problem from a predetermined problem class. Each problem in\nthis class should have a nominal cost (in MIPS-years say) which is\npublicly agreed on.\n\n3. Computation. After seeing the bids, the ones who placed bids in the\nbidding phase may now solve the problems in their bids and broadcast the\nsolutions.\n\n4. Money creation. Each account keeper accepts the highest bids (among\nthose who actually broadcasted solutions) in terms of nominal cost per\nunit of b-money created and credits the bidders' accounts accordingly.\n")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);