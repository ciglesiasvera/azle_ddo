import {
    Canister,
    Principal,
    Result,
    Opt,
    Record,
    query,
    update,
    text,
    StableBTreeMap,
    nat64,
    Vec,
    Err,
    Ok,
    ic
} from 'azle';

// Definir tipos de datos
const Member = Record({
    id: Principal,
    createdAt: nat64,
    vote: Vec(Principal),
    username: text,
});

const Candidate = Record({
    id: Principal,
    createdAt: nat64,
    voteResults: Vec(Principal),
    username: text,
});

// Mapas estables para miembros y candidatos
let members = StableBTreeMap(Principal, Member, 0);
let candidates = StableBTreeMap(Principal, Candidate, 1);
let vote: number[] = [];
let voteResults: number[] = [];

export default Canister({
    // CRUD para miembros
    createMember: update([text], Member, (membername) => {
        const id = ic.id();
        const member: typeof Member = {
            id,
            createdAt: ic.time(),
            vote: [],
            username: membername,
        };

        members.insert(member.id, member);

        return member;
    }),

    readMembers: query([], Vec(Member), () => {
        return members.values();
    }),

    /* readMemberById: query([Principal], Opt(Member), (id) => {
        return members.get(id);
    }), */

   /*  deleteMember: update([Principal], Result(Member, members), (id) => {
        const memberOpt = members.get(id);
    
        if ('None' in memberOpt) {
            return Err({
                MemberDoesNotExist: id
            });
        }
    
        const member = memberOpt.Some;
    
        member.vote.forEach((voteId: Principal) => {
            candidates.update(voteId, (candidate: typeof Candidate) => {
                candidate.voteResults = candidate.voteResults.filter(
                    (voterId: Principal) => voterId !== member.id
                );
                return candidate;
            });
        });
    
        members.remove(member.id);
    
        return Ok(member);
    }), */
    
    // CRUD para candidatos
    createCandidate: update([text], Candidate, (candidatename) => {
        const id = ic.id();
        const candidate: typeof Candidate = {
            id,
            createdAt: ic.time(),
            voteResults: [],
            username: candidatename,
        };

        candidates.insert(candidate.id, candidate);

        return candidate;
    }),

    readCandidates: query([], Vec(Candidate), () => {
        return candidates.values();
    }),

    /* readCandidateById: query([Principal], Opt(Candidate), (id) => {
        return candidates.get(id);
    }), */

    /* deleteCandidate: update([Principal], Result(Candidate, candidates), (id) => {
        const candidateOpt = candidates.get(id);
    
        if ('None' in candidateOpt) {
            return Err({
                CandidateDoesNotExist: id
            });
        }
    
        const candidate = candidateOpt.Some;
    
        candidate.voteResults.forEach((voteResultId: Principal) => {
            members.update(voteResultId, (member: typeof Member) => {
                member.vote = member.vote.filter(
                    (votedCandidateId) => votedCandidateId !== candidate.id
                );
                return member;
            });
        });
    
        candidates.remove(candidate.id);
    
        return Ok(candidate);
    }), */
    
    // Método para que un miembro vote por un candidato
    /* voteForMember: update([Principal, Principal], Result(Member, candidates), (memberId, candidateId) => {
        const memberOpt = members.get(memberId);
        const candidateOpt = candidates.get(candidateId);
    
        if ('None' in memberOpt || 'None' in candidateOpt) {
            return Err({
                MemberOrCandidateDoesNotExist: `${memberId} or ${candidateId}`
            });
        }
    
        const member = memberOpt.Some;
        const candidate = candidateOpt.Some; */
    
        /* // Verificar si el miembro ya votó por este candidato
        if (member.vote.includes(candidateId)) {
            return Err({
                MemberAlreadyVotedForCandidate: `${memberId} for ${candidateId}`
            });
        }
    
        // Registrar el voto del miembro y el resultado en el candidato
        candidates.update(candidateId, (updatedCandidate: typeof Candidate) => {
            updatedCandidate.voteResults.push(memberId);
            return updatedCandidate;
        });
    
        members.update(memberId, (updatedMember: typeof Member) => {
            updatedMember.vote.push(candidateId);
            return updatedMember;
        }); */
    
        /* return Ok(member); 
    }), */
    
});
