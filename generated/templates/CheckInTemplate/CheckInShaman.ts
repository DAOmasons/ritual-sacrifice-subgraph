// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenAmountClaimed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalSecondsWorked(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get sessionsTime(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get sessionsValue(): Array<i32> {
    return this._event.parameters[5].value.toI32Array();
  }

  get metadata(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Lock extends ethereum.Event {
  get params(): Lock__Params {
    return new Lock__Params(this);
  }
}

export class Lock__Params {
  _event: Lock;

  constructor(event: Lock) {
    this._event = event;
  }

  get isLocked(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Mutiny extends ethereum.Event {
  get params(): Mutiny__Params {
    return new Mutiny__Params(this);
  }
}

export class Mutiny__Params {
  _event: Mutiny;

  constructor(event: Mutiny) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Post extends ethereum.Event {
  get params(): Post__Params {
    return new Post__Params(this);
  }
}

export class Post__Params {
  _event: Post;

  constructor(event: Post) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tag(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get metadata(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class UpdateInterval extends ethereum.Event {
  get params(): UpdateInterval__Params {
    return new UpdateInterval__Params(this);
  }
}

export class UpdateInterval__Params {
  _event: UpdateInterval;

  constructor(event: UpdateInterval) {
    this._event = event;
  }

  get from(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdatePercs extends ethereum.Event {
  get params(): UpdatePercs__Params {
    return new UpdatePercs__Params(this);
  }
}

export class UpdatePercs__Params {
  _event: UpdatePercs;

  constructor(event: UpdatePercs) {
    this._event = event;
  }

  get from(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get to(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class UpdateTokenPerSecond extends ethereum.Event {
  get params(): UpdateTokenPerSecond__Params {
    return new UpdateTokenPerSecond__Params(this);
  }
}

export class UpdateTokenPerSecond__Params {
  _event: UpdateTokenPerSecond;

  constructor(event: UpdateTokenPerSecond) {
    this._event = event;
  }

  get from(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CheckInShaman extends ethereum.SmartContract {
  static bind(address: Address): CheckInShaman {
    return new CheckInShaman("CheckInShaman", address);
  }

  baal(): Address {
    let result = super.call("baal", "baal():(address)", []);

    return result[0].toAddress();
  }

  try_baal(): ethereum.CallResult<Address> {
    let result = super.tryCall("baal", "baal():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  checkInInterval(): BigInt {
    let result = super.call(
      "checkInInterval",
      "checkInInterval():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_checkInInterval(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkInInterval",
      "checkInInterval():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isLocked(): boolean {
    let result = super.call("isLocked", "isLocked():(bool)", []);

    return result[0].toBoolean();
  }

  try_isLocked(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isLocked", "isLocked():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sharesOrLoot(): boolean {
    let result = super.call("sharesOrLoot", "sharesOrLoot():(bool)", []);

    return result[0].toBoolean();
  }

  try_sharesOrLoot(): ethereum.CallResult<boolean> {
    let result = super.tryCall("sharesOrLoot", "sharesOrLoot():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  teamLead(): Address {
    let result = super.call("teamLead", "teamLead():(address)", []);

    return result[0].toAddress();
  }

  try_teamLead(): ethereum.CallResult<Address> {
    let result = super.tryCall("teamLead", "teamLead():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeLedger(param0: Address): BigInt {
    let result = super.call("timeLedger", "timeLedger(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_timeLedger(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timeLedger", "timeLedger(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenPerSecond(): BigInt {
    let result = super.call("tokenPerSecond", "tokenPerSecond():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenPerSecond",
      "tokenPerSecond():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  valueScalePercs(param0: BigInt): BigInt {
    let result = super.call(
      "valueScalePercs",
      "valueScalePercs(uint256):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_valueScalePercs(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "valueScalePercs",
      "valueScalePercs(uint256):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get _sessionsTime(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _sessionsValue(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }

  get _metadata(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get _baal(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _teamLead(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _sharesOrLoot(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _tokenPerSecond(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _checkInInterval(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _valueScalePercs(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }

  get _shouldLock(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class LockCall extends ethereum.Call {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get _shouldLock(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }
}

export class MutinyCall extends ethereum.Call {
  get inputs(): MutinyCall__Inputs {
    return new MutinyCall__Inputs(this);
  }

  get outputs(): MutinyCall__Outputs {
    return new MutinyCall__Outputs(this);
  }
}

export class MutinyCall__Inputs {
  _call: MutinyCall;

  constructor(call: MutinyCall) {
    this._call = call;
  }

  get _newTeamLead(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MutinyCall__Outputs {
  _call: MutinyCall;

  constructor(call: MutinyCall) {
    this._call = call;
  }
}

export class PostCall extends ethereum.Call {
  get inputs(): PostCall__Inputs {
    return new PostCall__Inputs(this);
  }

  get outputs(): PostCall__Outputs {
    return new PostCall__Outputs(this);
  }
}

export class PostCall__Inputs {
  _call: PostCall;

  constructor(call: PostCall) {
    this._call = call;
  }

  get content(): string {
    return this._call.inputValues[0].value.toString();
  }

  get tag(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class PostCall__Outputs {
  _call: PostCall;

  constructor(call: PostCall) {
    this._call = call;
  }
}

export class UpdateCheckInIntervalCall extends ethereum.Call {
  get inputs(): UpdateCheckInIntervalCall__Inputs {
    return new UpdateCheckInIntervalCall__Inputs(this);
  }

  get outputs(): UpdateCheckInIntervalCall__Outputs {
    return new UpdateCheckInIntervalCall__Outputs(this);
  }
}

export class UpdateCheckInIntervalCall__Inputs {
  _call: UpdateCheckInIntervalCall;

  constructor(call: UpdateCheckInIntervalCall) {
    this._call = call;
  }

  get _newCheckInInterval(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateCheckInIntervalCall__Outputs {
  _call: UpdateCheckInIntervalCall;

  constructor(call: UpdateCheckInIntervalCall) {
    this._call = call;
  }
}

export class UpdateTokenPerSecondCall extends ethereum.Call {
  get inputs(): UpdateTokenPerSecondCall__Inputs {
    return new UpdateTokenPerSecondCall__Inputs(this);
  }

  get outputs(): UpdateTokenPerSecondCall__Outputs {
    return new UpdateTokenPerSecondCall__Outputs(this);
  }
}

export class UpdateTokenPerSecondCall__Inputs {
  _call: UpdateTokenPerSecondCall;

  constructor(call: UpdateTokenPerSecondCall) {
    this._call = call;
  }

  get _newTokenPerSecond(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateTokenPerSecondCall__Outputs {
  _call: UpdateTokenPerSecondCall;

  constructor(call: UpdateTokenPerSecondCall) {
    this._call = call;
  }
}

export class UpdateValueScalePercsCall extends ethereum.Call {
  get inputs(): UpdateValueScalePercsCall__Inputs {
    return new UpdateValueScalePercsCall__Inputs(this);
  }

  get outputs(): UpdateValueScalePercsCall__Outputs {
    return new UpdateValueScalePercsCall__Outputs(this);
  }
}

export class UpdateValueScalePercsCall__Inputs {
  _call: UpdateValueScalePercsCall;

  constructor(call: UpdateValueScalePercsCall) {
    this._call = call;
  }

  get _newValueScalePercs(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class UpdateValueScalePercsCall__Outputs {
  _call: UpdateValueScalePercsCall;

  constructor(call: UpdateValueScalePercsCall) {
    this._call = call;
  }
}
