import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { CheckInSummonComplete } from "../generated/CheckInSummonerV2/CheckInSummonerV2"
import { handleCheckInSummonComplete } from "../src/check-in-summoner-v-2"
import { createCheckInSummonCompleteEvent } from "./check-in-summoner-v-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let baal = Address.fromString("0x0000000000000000000000000000000000000001")
    let summoner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let shamanAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let teamLead = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let sharesOrLoot = "boolean Not implemented"
    let tokenPerSecond = BigInt.fromI32(234)
    let checkInInterval = BigInt.fromI32(234)
    let valueScalePercs = [BigInt.fromI32(234)]
    let isLocked = "boolean Not implemented"
    let projectMetadata = "Example string value"
    let newCheckInSummonCompleteEvent = createCheckInSummonCompleteEvent(
      baal,
      summoner,
      shamanAddress,
      teamLead,
      sharesOrLoot,
      tokenPerSecond,
      checkInInterval,
      valueScalePercs,
      isLocked,
      projectMetadata
    )
    handleCheckInSummonComplete(newCheckInSummonCompleteEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "baal",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "summoner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "shamanAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "teamLead",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "sharesOrLoot",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "tokenPerSecond",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "checkInInterval",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "valueScalePercs",
      "[234]"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "isLocked",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "projectMetadata",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
