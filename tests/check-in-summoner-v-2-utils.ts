import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CheckInSummonComplete } from "../generated/CheckInSummonerV2/CheckInSummonerV2"

export function createCheckInSummonCompleteEvent(
  baal: Address,
  summoner: Address,
  shamanAddress: Address,
  teamLead: Address,
  sharesOrLoot: boolean,
  tokenPerSecond: BigInt,
  checkInInterval: BigInt,
  valueScalePercs: Array<BigInt>,
  isLocked: boolean,
  projectMetadata: string
): CheckInSummonComplete {
  let checkInSummonCompleteEvent = changetype<CheckInSummonComplete>(
    newMockEvent()
  )

  checkInSummonCompleteEvent.parameters = new Array()

  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam("baal", ethereum.Value.fromAddress(baal))
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam("summoner", ethereum.Value.fromAddress(summoner))
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "shamanAddress",
      ethereum.Value.fromAddress(shamanAddress)
    )
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam("teamLead", ethereum.Value.fromAddress(teamLead))
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "sharesOrLoot",
      ethereum.Value.fromBoolean(sharesOrLoot)
    )
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "tokenPerSecond",
      ethereum.Value.fromUnsignedBigInt(tokenPerSecond)
    )
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "checkInInterval",
      ethereum.Value.fromUnsignedBigInt(checkInInterval)
    )
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "valueScalePercs",
      ethereum.Value.fromUnsignedBigIntArray(valueScalePercs)
    )
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam("isLocked", ethereum.Value.fromBoolean(isLocked))
  )
  checkInSummonCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "projectMetadata",
      ethereum.Value.fromString(projectMetadata)
    )
  )

  return checkInSummonCompleteEvent
}
