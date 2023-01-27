import { BigInt, log } from '@graphprotocol/graph-ts';
import {
  Claim,
  Lock,
  Mutiny,
  Post,
  UpdateInterval,
  UpdatePercs,
  UpdateTokenPerSecond,
} from '../generated/templates/CheckInTemplate/CheckInShaman';
import { Shaman, TimelineEvent } from '../generated/schema';

export function claim(event: Claim): void {
  const claimId = event.transaction.from
    .toHexString()
    .concat('-claim-')
    .concat(event.block.timestamp.toString());

  let shaman = Shaman.load(event.address.toHexString());
  let claimEvent = new TimelineEvent(claimId);
  if (!shaman || !claimEvent) {
    return;
  }

  claimEvent.createdAt = event.block.timestamp;
  claimEvent.createdBy = event.transaction.from;
  claimEvent.shamanAddress = event.address;
  claimEvent.shaman = event.address.toHexString();
  claimEvent.type = 'claim';
  claimEvent.metadata = event.params.metadata;
  claimEvent.projectMetadata = shaman.projectMetadata;
  claimEvent.totalSecondsWorked = event.params.totalSecondsWorked;
  claimEvent.sessionsTime = event.params.sessionsTime;
  claimEvent.sessionsValue = event.params.sessionsValue;
  claimEvent.totalAmountClaimed = event.params.tokenAmountClaimed;
  claimEvent.save();
}

export function lock(event: Lock): void {
  const lockEventId = event.transaction.from
    .toHexString()
    .concat('-lock-')
    .concat(event.block.timestamp.toString());

  let shaman = Shaman.load(event.address.toHexString());
  let lockEvent = new TimelineEvent(lockEventId);

  if (!shaman || !lockEvent) {
    return;
  }
  lockEvent.createdAt = event.block.timestamp;
  lockEvent.createdBy = event.transaction.from;
  lockEvent.shamanAddress = event.address;
  lockEvent.shaman = event.address.toHexString();
  lockEvent.type = 'updateLock';
  lockEvent.projectMetadata = shaman.projectMetadata;
  lockEvent.isLocked = event.params.isLocked;
  lockEvent.save();

  shaman.isLocked = event.params.isLocked;
  shaman.save();
}

export function mutiny(event: Mutiny): void {
  const mutinyEventId = event.transaction.from
    .toHexString()
    .concat('-mutiny-')
    .concat(event.block.timestamp.toString());

  let shaman = Shaman.load(event.address.toHexString());
  let mutinyEvent = new TimelineEvent(mutinyEventId);

  if (!shaman || !mutinyEvent) {
    return;
  }
  mutinyEvent.createdAt = event.block.timestamp;
  mutinyEvent.createdBy = event.transaction.from;
  mutinyEvent.shamanAddress = event.address;
  mutinyEvent.shaman = event.address.toHexString();
  mutinyEvent.type = 'mutiny';
  mutinyEvent.projectMetadata = shaman.projectMetadata;
  mutinyEvent.mutinyFrom = event.params.from;
  mutinyEvent.mutinyTo = event.params.to;

  mutinyEvent.save();

  shaman.teamLead = event.params.to;
  shaman.save();
}
export function updatePercs(event: UpdatePercs): void {
  const updatePercsEventId = event.transaction.from
    .toHexString()
    .concat('-updatePercs-')
    .concat(event.block.timestamp.toString());

  let shaman = Shaman.load(event.address.toHexString());
  let updatePercsEvent = new TimelineEvent(updatePercsEventId);

  if (!shaman || !updatePercsEvent) {
    return;
  }
  updatePercsEvent.createdAt = event.block.timestamp;
  updatePercsEvent.createdBy = event.transaction.from;
  updatePercsEvent.shamanAddress = event.address;
  updatePercsEvent.shaman = event.address.toHexString();
  updatePercsEvent.type = 'updatePercs';
  updatePercsEvent.projectMetadata = shaman.projectMetadata;
  updatePercsEvent.updatePercsFrom = event.params.from;
  updatePercsEvent.updatePercsTo = event.params.to;
  updatePercsEvent.save();

  shaman.valueScalePercs = event.params.to;
  shaman.save();
}

export function updateTokenPerSecond(event: UpdateTokenPerSecond): void {
  const updateTokenPerSecondEventId = event.transaction.from
    .toHexString()
    .concat('-updateTokenPerSecond-')
    .concat(event.block.timestamp.toString());

  let shaman = Shaman.load(event.address.toHexString());
  let updateTokenPerSecondEvent = new TimelineEvent(
    updateTokenPerSecondEventId
  );

  if (!shaman || !updateTokenPerSecondEvent) {
    return;
  }
  updateTokenPerSecondEvent.createdAt = event.block.timestamp;
  updateTokenPerSecondEvent.createdBy = event.transaction.from;
  updateTokenPerSecondEvent.shamanAddress = event.address;
  updateTokenPerSecondEvent.shaman = event.address.toHexString();
  updateTokenPerSecondEvent.type = 'updateTokenPerSecond';
  updateTokenPerSecondEvent.projectMetadata = shaman.projectMetadata;
  updateTokenPerSecondEvent.updateTokenPerSecondFrom = event.params.from;
  updateTokenPerSecondEvent.updateTokenPerSecondTo = event.params.to;
  updateTokenPerSecondEvent.save();

  shaman.tokenPerSecond = event.params.to;
  shaman.save();
}

export function updateInterval(event: UpdateInterval): void {
  const updateIntervalEventId = event.transaction.from
    .toHexString()
    .concat('-updateInterval-')
    .concat(event.block.timestamp.toString());

  let shaman = Shaman.load(event.address.toHexString());
  let updateIntervalEvent = new TimelineEvent(updateIntervalEventId);

  if (!shaman || !updateIntervalEvent) {
    return;
  }
  updateIntervalEvent.createdAt = event.block.timestamp;
  updateIntervalEvent.createdBy = event.transaction.from;
  updateIntervalEvent.shamanAddress = event.address;
  updateIntervalEvent.shaman = event.address.toHexString();
  updateIntervalEvent.type = 'updateInterval';
  updateIntervalEvent.projectMetadata = shaman.projectMetadata;
  updateIntervalEvent.updateIntervalFrom = event.params.from;
  updateIntervalEvent.updateIntervalTo = event.params.to;
  updateIntervalEvent.save();

  shaman.interval = event.params.to;
  shaman.save();
}
