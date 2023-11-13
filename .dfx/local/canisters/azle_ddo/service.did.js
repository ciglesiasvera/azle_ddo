export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createCandidate' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'username' : IDL.Text,
            'voteResults' : IDL.Vec(IDL.Principal),
            'createdAt' : IDL.Nat64,
          }),
        ],
        [],
      ),
    'createMember' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'username' : IDL.Text,
            'createdAt' : IDL.Nat64,
            'vote' : IDL.Vec(IDL.Principal),
          }),
        ],
        [],
      ),
    'readCandidates' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'username' : IDL.Text,
              'voteResults' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
    'readMembers' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'username' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'vote' : IDL.Vec(IDL.Principal),
            })
          ),
        ],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
