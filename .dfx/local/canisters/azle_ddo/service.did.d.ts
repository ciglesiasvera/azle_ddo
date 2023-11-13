import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'createCandidate' : ActorMethod<
    [string],
    {
      'id' : Principal,
      'username' : string,
      'voteResults' : Array<Principal>,
      'createdAt' : bigint,
    }
  >,
  'createMember' : ActorMethod<
    [string],
    {
      'id' : Principal,
      'username' : string,
      'createdAt' : bigint,
      'vote' : Array<Principal>,
    }
  >,
  'readCandidates' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'username' : string,
        'voteResults' : Array<Principal>,
        'createdAt' : bigint,
      }
    >
  >,
  'readMembers' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'username' : string,
        'createdAt' : bigint,
        'vote' : Array<Principal>,
      }
    >
  >,
}
