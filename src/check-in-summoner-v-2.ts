import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  CheckInSummonerV2,
  CheckInSummonComplete,
} from "../generated/CheckInSummonerV2/CheckInSummonerV2";
import { Shaman, TimelineEvent } from "../generated/schema";

export function handleCheckInSummonComplete(
  event: CheckInSummonComplete
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let shaman = Shaman.load(event.params.shamanAddress.toHexString());
  // let factory = Factory.load(event.transaction.from.toHexString());

  if (!shaman) {
    shaman = new Shaman(event.params.shamanAddress.toHexString());
    shaman.createdAt = event.block.timestamp;
    shaman.baal = event.params.baal;
    shaman.address = event.params.shamanAddress;
    shaman.interval = event.params.checkInInterval;
    shaman.tokenPerSecond = event.params.tokenPerSecond;
    shaman.valueScalePercs = event.params.valueScalePercs;
    shaman.teamLead = event.params.teamLead;
    shaman.sharesOrLoot = event.params.sharesOrLoot;
    shaman.summoner = event.params.summoner;
    shaman.timeline = [];
    shaman.projectMetadata = event.params.projectMetadata;
  }

  let summonEvent = new TimelineEvent(event.transaction.hash.toHexString());
  summonEvent.type = "summon";
  summonEvent.createdAt = event.block.timestamp;
  summonEvent.shamanAddress = event.params.shamanAddress;
  log.debug("Logging summoning event: {}", [summonEvent.type.toString()]);

  shaman.timeline.push(summonEvent.id);
  shaman.save();

  // if (!factory) {
  //   factory = new Factory(event.transaction.from.toHexString());
  //   factory.count = BigInt.fromI32(0);
  //   factory.shamans;
  // }

  // factory.count = factory.count.plus(BigInt.fromI32(1));
  // factory.shamans.push(shaman.id);
  // BigInt and BigDecimal math are supported
  // factory.count = factory.count.plus(BigInt.fromI32(1));
  // factory.shamans = factory.shamans.concat([shaman.id]);
  // Entity fields can be set based on event parameters

  // Entities can be written to the store with `.save()`
  // factory.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.summon(...)
  // - contract.template(...)
}
