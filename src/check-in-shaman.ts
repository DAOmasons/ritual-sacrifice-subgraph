import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  Claim,
  Initialized,
  Lock,
  Mutiny,
  Post,
  UpdatePercs,
  UpdateTokenPerSecond,
} from "../generated/templates/CheckInTemplate/CheckInShaman";
import { Shaman, TimelineEvent } from "../generated/schema";

export function claim(event: Claim): void {
  const claimId = event.transaction.from
    .toHexString()
    .concat("-claim-")
    .concat(event.block.timestamp.toString());
  let claimEvent = TimelineEvent.load(claimId);
  let shaman = Shaman.load(event.address.toHexString());
  if (!shaman) {
    return;
  }
  if (!claimEvent) {
    claimEvent = new TimelineEvent(claimId);
    claimEvent.createdAt = event.block.timestamp;
    claimEvent.createdBy = event.transaction.from;
    claimEvent.shamanAddress = event.address;
    claimEvent.shaman = event.address.toHexString();
    claimEvent.type = "claim";
    claimEvent.metadata = event.params.metadata;
    claimEvent.projectMetadata = shaman.projectMetadata;
    claimEvent.totalSecondsWorked = event.params.totalSecondsWorked;
    claimEvent.sessionsTime = event.params.sessionsTime;
    claimEvent.sessionsValue = event.params.sessionsValue;
    claimEvent.totalAmountClaimed = event.params.tokenAmountClaimed;
  }
  claimEvent.save();
}

// export function lock(event: Lock): void {
//   const lockId = event.transaction.from
//     .toHexString()
//     .concat("-lock-")
//     .concat(event.block.timestamp.toString());
//   lock;
// }
